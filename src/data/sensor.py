import serial
from datetime import datetime


# replace '/dev/cu.usbserial-XXXX' with your port
ser = serial.Serial('/dev/cu.usbserial-14110')

while True:
    data = []
    for index in range(0, 10):
        datum = ser.read()
        data.append(datum)

    pm25 = int.from_bytes(b''.join(data[2:4]), byteorder='little') / 10
    pm10 = int.from_bytes(b''.join(data[4:6]), byteorder='little') / 10

    



    print(f"PM 2.5: {pm25}, PM 10: {pm10}")




print(data)
print(data)