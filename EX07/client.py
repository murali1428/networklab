import socket
s=socket.socket()
host=input("please enter the host address of the sender:")
port=8080
s.connect((host,port))
print("connected...")
filename=input("please enter a filename for the incoming file:")
file=open(filename,'wb')
file_data=s.recv(1024)
file.write(file_data)
file.close()
print("file has been received sucessfully")