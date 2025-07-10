---
# Este es el título del artículo
title: Firmware Overview
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

# Firmware Overview

The Multi-Protocol Programmer (based on the CH552 microcontroller) requires specific firmware for each supported protocol. To ensure proper operation, the corresponding firmware must be compiled and flashed onto the CH552. Below is an overview of the firmware requirements for each supported architecture.



## Firmware Requirements

### 🔧 AVR Firmware

* **Protocol**: ISP (In-System Programming)
* **Interface**: SPI
* **Purpose**: Used to program AVR microcontrollers.
* **Requirement**: The AVR firmware must be flashed onto the CH552 to enable AVR ISP programming.

### ⚙️ ARM Firmware

* **Protocol**: CMSIS-DAP (v1) with SWD (Serial Wire Debug)
* **Supported Devices**:

  * Raspberry Pi RP2040
  * PY32 series (e.g., PY32F003)
  * STM32 family (F0, F1, F4, etc.)
* **Purpose**: Enables programming and debugging of ARM Cortex-M microcontrollers.
* **Requirement**: The ARM firmware must be loaded to use CMSIS-DAP and SWD features.

### 🔩 CPLD/FPGA Firmware

* **Protocol**: JTAG
* **Supported Device**: Altera MAX II (e.g., EPM240, EPM570)
* **Purpose**: Used to program CPLD/FPGA devices.
* **Requirement**: Load the appropriate JTAG firmware to support CPLD programming.

---

## How to Compile the Firmware

Follow the steps below to compile and flash the appropriate firmware to the CH552:

### 1. Download the Firmware Source Code

Clone the repository or download the firmware from the official source:

```bash
git clone git@github.com:UNIT-Electronics-MX/unit_ch55x_docker_sdk.git
cd unit_ch55x_docker_sdk
```

### 2. Set Up the Development Environment

Install the required compiler and tools. The firmware is typically built using `SDCC`:

```bash
sudo apt install sdcc make
```

> On Windows, consider using [MSYS2](https://www.msys2.org/) or WSL for a similar build environment.

### 3. Select the Appropriate Firmware

Navigate to the directory corresponding to the desired protocol:

```bash
cd examples/usb/prog/cmsisdap      # For ARM CMSIS-DAP
# or
cd examples/usb/prog/avr           # For AVR ISP
# or
cd examples/usb/prog/cpld          # For CPLD/FPGA JTAG
```

### 4. Compile the Firmware

Run the build command in the selected directory:

```bash
make all
```

This will generate a `.hex` firmware file compatible with the CH552.

### 5. Flash the Firmware to CH552

Put the CH552 in bootloader mode (hold the `BOOT` button while plugging into USB), then use [`chprog`](https://github.com/cnlohr/chprog) or a similar flashing tool:

```bash
./chprog -w firmware.hex
```

> You should see confirmation that the firmware has been written successfully.

