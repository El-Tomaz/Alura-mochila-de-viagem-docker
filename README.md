# Travel Packing  List - Containerized

![some containers](./imagem_container_repo.jpg) ![web app screenshot](app_screenshot.png)


Hello! This was my first project using Docker 🐳, it's just a simple web site where you create your own travel packing list, but i'm really happy and excited to learn how to work with containers! :)

To test this project, run a container with the image from dockerhub:

     docker run -dp 0.0.0.0:3000:3000 tomazdlema/mochila-de-viagem-alura 

or build the docker image with

    docker build -t travel-backpack .

And create a container in detached mode with a port mapping using

    docker run -dp 127.0.0.1:3000:3000 travel-backpack 

After that just go to http://127.0.0.1:3000. thank you for your attention ;)



