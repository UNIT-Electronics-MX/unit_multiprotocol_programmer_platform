---
# Este es el título del artículo
title: Descripción del Firmware
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

# Descripción del Firmware
El Programador Multiprotocolo (basado en el microcontrolador CH552) requiere firmware específico para cada protocolo compatible. Para garantizar un funcionamiento adecuado, el firmware correspondiente debe ser compilado y grabado en el CH552. A continuación, se presenta una descripción general de los requisitos de firmware para cada arquitectura compatible.

## Requisitos de Firmware

### 🔧 Firmware para AVR

* **Protocolo**: ISP (Programación en el Sistema)
* **Interfaz**: SPI
* **Propósito**: Utilizado para programar microcontroladores AVR.
* **Requisito**: El firmware para AVR debe ser grabado en el CH552 para habilitar la programación ISP de AVR.

### ⚙️ Firmware para ARM

* **Protocolo**: CMSIS-DAP (v1) con SWD (Serial Wire Debug)
* **Dispositivos Compatibles**:

  * Raspberry Pi RP2040
  * Serie PY32 (por ejemplo, PY32F003)
  * Familia STM32 (F0, F1, F4, etc.)
* **Propósito**: Permite la programación y depuración de microcontroladores ARM Cortex-M.
* **Requisito**: El firmware para ARM debe ser cargado para utilizar las funciones de CMSIS-DAP y SWD.

### 🔩 Firmware para CPLD/FPGA

* **Protocolo**: JTAG
* **Dispositivo Compatible**: Altera MAX II (por ejemplo, EPM240, EPM570)
* **Propósito**: Utilizado para programar dispositivos CPLD/FPGA.
* **Requisito**: Cargar el firmware JTAG adecuado para soportar la programación de CPLD.

---

## Cómo Compilar el Firmware

Sigue los pasos a continuación para compilar y grabar el firmware adecuado en el CH552:

### 1. Descargar el Código Fuente del Firmware

Clona el repositorio o descarga el firmware desde la fuente oficial:

```bash
git clone git@github.com:UNIT-Electronics-MX/unit_ch55x_docker_sdk.git
cd unit_ch55x_docker_sdk
```

### 2. Configurar el Entorno de Desarrollo

Instala el compilador y las herramientas necesarias. El firmware generalmente se construye utilizando `SDCC`:

```bash
sudo apt install sdcc make
```

> En Windows, considera usar [MSYS2](https://www.msys2.org/) o WSL para un entorno de compilación similar.

### 3. Seleccionar el Firmware Adecuado

Navega al directorio correspondiente al protocolo deseado:

```bash
cd examples/usb/prog/cmsisdap      # Para ARM CMSIS-DAP
# o
cd examples/usb/prog/avr           # Para AVR ISP
# o
cd examples/usb/prog/cpld          # Para CPLD/FPGA JTAG
```

### 4. Compilar el Firmware

Ejecuta el comando de construcción en el directorio seleccionado:

```bash
make all
```

Esto generará un archivo de firmware `.hex` compatible con el CH552.

### 5. Grabar el Firmware en el CH552

Coloca el CH552 en modo bootloader (mantén presionado el botón `BOOT` mientras lo conectas al USB), luego utiliza [`chprog`](https://github.com/cnlohr/chprog) u otra herramienta de grabación similar:

```bash
./chprog -w firmware.hex
```

> Deberías ver una confirmación de que el firmware se ha grabado exitosamente.

