# Use the Python3.7.2 image
#FROM python:3.7.2-stretch
FROM python

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app 
ADD . /app
VOLUME ["/app/config"]
#VOLUME ["/app/downloads"]

# Install the dependencies
RUN pip install -r requirements.txt


# run the command to start bash
CMD ["python","main.py"]