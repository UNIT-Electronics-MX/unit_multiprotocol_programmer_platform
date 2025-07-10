---
# Este es el título del artículo
title: Configuración del SDK de Docker
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
  - Configuración de la página
  - Guía de uso
# Esta página estará fijada en la lista de artículos
sticky: true
# Esta página aparecerá en los artículos destacados
star: true

---
# Configuración de Docker para Usuarios Sin Privilegios en Linux

Esta guía explica cómo configurar Docker en Linux para que los contenedores, incluido el contenedor `spkg`, puedan ser construidos y ejecutados sin requerir privilegios de superusuario (`sudo`).

## 1. Instalar Docker Engine

Puedes instalar Docker utilizando una de las siguientes opciones:

### Opción A – Instalar Usando el Paquete `docker.io`

Este es el método más sencillo y utiliza la versión proporcionada por tu distribución:

```bash
sudo apt update
sudo apt install -y docker.io
```

### Opción B – Instalar la Última Versión Oficial de Docker

Para obtener la versión más actualizada de Docker, consulta la [documentación oficial de Docker](https://docs.docker.com/engine/install/ubuntu/).

---

## 2. Verificar el Funcionamiento de Docker

Inicia el servicio de Docker y confirma que está funcionando:

```bash
sudo systemctl start docker
sudo systemctl enable docker
docker version
```

---

## 3. Configurar el Acceso de Usuario a Docker

Agrega tu usuario al grupo `docker` para que Docker pueda ejecutarse sin `sudo`:

```bash
sudo usermod -aG docker $USER
```

Después de ejecutar el comando anterior, **cierra sesión y vuelve a iniciarla**, o ejecuta:

```bash
newgrp docker
```

---

## 4. Validar el Uso de Docker Sin Privilegios

Verifica que Docker se ejecute sin `sudo`:

```bash
docker ps
```

Deberías ver una lista vacía o los encabezados de la tabla de contenedores, sin errores.

---

## 5. Verificar la Instalación de `docker-compose`

Docker Compose puede instalarse de dos maneras: como una versión heredada (`docker-compose`) o como un complemento moderno (`docker compose`):

```bash
docker-compose version      # Versión heredada v1
# o
docker compose version      # Complemento moderno v2
```

Si no está instalado, hazlo utilizando:

```bash
sudo apt install docker-compose           # Para la versión heredada v1
sudo apt install docker-compose-plugin    # Para el complemento v2
```

---

## 6. Ejecutar `spkg` Sin `sudo`

Con la configuración completa, ahora puedes usar `spkg` sin privilegios de superusuario:

```bash
./spkg/spkg compose                  # Construir la imagen de Docker
./spkg/spkg -p ./my_project bin      # Compilar tu proyecto
```
---

Déjame saber si deseas convertir esto en un PDF descargable, incrustarlo en una guía web o localizarlo al español.

---

## Opcional: Verificar Permisos del Socket de Docker

Asegúrate de que el socket de Docker tenga los permisos correctos:

```bash
ls -l /var/run/docker.sock
```

Salida esperada:

```bash
srw-rw---- 1 root docker ...
```

Si es necesario, corrige la propiedad y los permisos:

```bash
sudo chown root:docker /var/run/docker.sock
sudo chmod 660 /var/run/docker.sock
```
