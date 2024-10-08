import cv2
import mediapipe as mp
import numpy as np

# Initialize MediaPipe hands
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils

hands = mp_hands.Hands(min_detection_confidence=0.7, min_tracking_confidence=0.7)

cap = cv2.VideoCapture(0)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    # Convert the frame to RGB
    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Process the frame to detect hands
    result = hands.process(frame_rgb)

    if result.multi_hand_landmarks:
        for hand_landmarks in result.multi_hand_landmarks:
            # Draw hand landmarks on the frame
            mp_drawing.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)
            
            # Extract landmark positions
            landmarks = []
            for lm in hand_landmarks.landmark:
                lmx = int(lm.x * frame.shape[1])
                lmy = int(lm.y * frame.shape[0])
                landmarks.append((lmx, lmy))
            
            # Check for swipe gesture by comparing thumb and index finger positions
            thumb_tip = landmarks[4]  # Thumb tip
            index_tip = landmarks[8]  # Index finger tip
            
            # Simple left/right swipe detection based on thumb movement
            if thumb_tip[0] < index_tip[0]:
                print("Left Swipe Detected!")
            elif thumb_tip[0] > index_tip[0]:
                print("Right Swipe Detected!")

    cv2.imshow("Hand Gesture", frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()

from flask import Flask
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    return 'WebSocket Server Running'

def send_gesture(gesture):
    socketio.emit('gesture', {'gesture': gesture})

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=8000)
