---
# Este es el título del artículo
title: Docker SDK Configuration
# Puedes personalizar la imagen de portada
cover: /assets/images/cover1.jpg
# Este es el ícono de la página
icon: file
# Este es el orden en la barra lateral
order: 2
# Configurar el autor
author: Cesar Bautista
# Configurar la fecha de escritura
date: 2025-07-10
# Una página puede tener múltiples categorías
category:
  - Guide
# Una página puede tener múltiples etiquetas
tag:
  - Docker Configuration
  - Guide
# Esta página estará fijada en la lista de artículos
sticky: true
# Esta página aparecerá en los artículos destacados
star: true

---

# Docker Configuration for Non-Privileged Users on Linux

This guide explains how to configure Docker on Linux so that containers—including the `spkg` container—can be built and executed without requiring superuser (`sudo`) privileges.



## 1. Install Docker Engine

You can install Docker using one of two options:

### Option A – Install Using the `docker.io` Package

This is the simplest method and uses the version provided by your distribution:

```bash
sudo apt update
sudo apt install -y docker.io
```

### Option B – Install the Latest Official Docker Version

For the most up-to-date Docker release, refer to the [official Docker documentation](https://docs.docker.com/engine/install/ubuntu/).

---

## 2. Verify Docker Operation

Start the Docker service and confirm it's running:

```bash
sudo systemctl start docker
sudo systemctl enable docker
docker version
```

---

## 3. Configure User Access to Docker

Add your user to the `docker` group so Docker can run without `sudo`:

```bash
sudo usermod -aG docker $USER
```

After running the above command, **log out and back in**, or run:

```bash
newgrp docker
```

---

## 4. Validate Non-Privileged Docker Usage

Check that Docker runs without `sudo`:

```bash
docker ps
```

You should see an empty list or container table headers—without errors.

---

## 5. Verify `docker-compose` Installation

Docker Compose can be installed in two ways—legacy (`docker-compose`) or as a modern plugin (`docker compose`):

```bash
docker-compose version      # Legacy v1
# or
docker compose version      # Modern plugin v2
```

If not installed, do so using:

```bash
sudo apt install docker-compose           # For legacy v1
sudo apt install docker-compose-plugin    # For plugin v2
```

---

## 6. Running `spkg` Without `sudo`

With the configuration complete, you can now use `spkg` without superuser privileges:

```bash
./spkg/spkg compose                  # Build the Docker image
./spkg/spkg -p ./my_project bin      # Compile your project
```
---

Let me know if you'd like this turned into a downloadable PDF, embedded in a web guide, or localized into Spanish.

---

## Optional: Verify Docker Socket Permissions

Ensure Docker socket has the correct permissions:

```bash
ls -l /var/run/docker.sock
```

Expected output:

```bash
srw-rw---- 1 root docker ...
```

If needed, fix the ownership and permissions:

```bash
sudo chown root:docker /var/run/docker.sock
sudo chmod 660 /var/run/docker.sock
```

