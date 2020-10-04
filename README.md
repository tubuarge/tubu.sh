# tubu.sh
tubu.sh is a development toolset that helps you to run applications inside your machine easily.

# Motivation
In every project, developers need tool to use in their project, it could be a mock server, a database, a gateway or even a dummy local file storage system.

tubu.sh will contain several on the go docker images to make ease of use development tools to be used inside of dev machines without knowledge of docker, vargant, sh, linux, bash or any other dependent tech stack.

# How?
here are some examples of how to use tubu.sh 
-- to run a postgres server, which runs locally on 5432 port and saves the datafolder where it runs under *postgres* folder
'tubu.sh run postgres'
-- tu run an ngnix server with reverse proxy
'tubu.sh run ngnix on port 80 forward /product to :8080'

# Final
Time is the only gold in these days if you want to save your life, use your time wisely.
