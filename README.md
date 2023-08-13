
Hello! This was my first project using Docker 🐳, it's just a simple web site where you create your own travel packing list, but i'm really happy and excited to learn how to work with containers! :)

To test this project, create a docker image with

    docker build -t travel-backpack .

And create a container in detached mode with a port mapping using

    docker run -dp 127.0.0.1:3000:3000 travel-backpack 

After that just go to http://127.0.0.1:3000. thank you for your attention ;)



