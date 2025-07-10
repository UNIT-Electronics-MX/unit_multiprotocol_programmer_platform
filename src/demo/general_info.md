---
# Este es el título del artículo
title: General Information
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
  - Page Configuration
  - Usage Guide
# Esta página estará fijada en la lista de artículos
sticky: true
# Esta página aparecerá en los artículos destacados
star: true
# Puedes personalizar el pie de página
footer: Este es un pie de página de prueba
# Puedes personalizar la información de derechos de autor
copyright: Sin derechos de autor
---



# General Information

The Multi-Protocol Programmer is a compact and versatile development tool designed for high-precision embedded system applications. It supports a broad range of protocols and device architectures, including AVR, ARM (CMSIS-DAP), and CPLD (MAX II). Its USB connectivity enables direct interfacing with standard development environments, enabling:

- In-system programming (ISP)
- Step-through debugging
- Boundary-scan testing (JTAG)
- Flash memory operations

Compatible with popular platforms such as STM32, RP2040, and PY32, this programmer integrates configurable GPIO lines, multi-protocol headers, and streamlined power delivery—making it ideal for rapid prototyping and field diagnostics.

::: warning Firmware Loading
For each protocol, the corresponding firmware must be loaded onto the device. Make sure to follow the specific instructions for each architecture.
:::

## Supported Architectures

- AVR — via ISP (SPI configuration)
- ARM Cortex-M — via CMSIS-DAP and SWD
- RP2040
- PY32
- STM32

CPLD/FPGA (MAX II) — via JTAG

All protocols are exposed via labeled headers or JST connectors, allowing fast, solderless prototyping.

This device connects to a host system via USB and allows the user to program and debug various microcontrollers and programmable logic devices.


### Features

- **Multi-architecture support**: Compatible with AVR (ISP), ARM Cortex-M (CMSIS-DAP), and CPLD (JTAG).
- **In-System Programming (ISP)**: Flash microcontrollers without desoldering.
- **Real-time debugging**: Step-through and breakpoint debugging with OpenOCD and PyOCD.
- **JTAG boundary-scan**: For CPLD configuration and board testing.
- **Configurable GPIOs**: Adaptable for use as JTAG, SWD, or ISP lines.
- **USB 2.0 interface**: Direct connection to host PC using USB CDC or HID.
- **Toolchain compatibility**: Works with avrdude, OpenOCD, PyOCD, urJTAG, and others.
- **Cross-platform support**: Compatible with Linux and partially supported on Windows.

### Advantages

- **Compact design**: Suitable for breadboards and embedded setups.
- **Versatility**: One device for multiple programming and debugging protocols.
- **Open-source firmware**: Fully customizable and community-supported.
- **Cost-effective**: Inexpensive alternative to commercial debuggers and programmers.
- **Linux-friendly**: No need for proprietary drivers on Linux systems.
- **Ideal for education**: Can be used in microcontroller courses and workshops.

### Limitations

- **External power required**: Cannot supply power to high-current target boards.
- **Learning curve**: Requires knowledge of protocols like CMSIS-DAP, JTAG, or AVR ISP.
- **Firmware updates**: May require reflashing to support new features or targets.
- **Partial Windows support**: Some tools may require manual setup or driver adjustments.

### Compatibility

#### CMSIS-DAP (ARM Cortex-M)

- Compatible with CMSIS-DAP v2.0 protocol.
- Supported by OpenOCD and PyOCD.
- Tested with:
  - STM32F0
  - RP2040 (Raspberry Pi Pico)
  - PY32 series
  - Other Cortex-M0/M3/M4 devices

#### AVR ISP

- Works with avrdude using USBasp-like interface.
- Supports:
  - ATmega328P
  - ATtiny85
  - ATmega2560
  - Other classic 8-bit AVR microcontrollers

#### CPLD JTAG

- Supports Intel (formerly Altera) MAX II series.
- Compatible with JTAG tools like urJTAG or openFPGALoader.
- JTAG signals exposed via GPIO (TDI, TDO, TCK, TMS).

### Use Cases

- Firmware flashing and in-system programming.
- Debugging embedded applications with CMSIS-DAP.
- Educational labs and training environments.
- Low-cost production line programming.
- Boundary-scan tests for hardware bring-up.
- CPLD configuration and prototyping.

### Resources

- **Firmware**: [wagiminator/CH552-DAPLink](https:)
- **CH552 Datasheet**: Available from WCH official website.
- **Tools**:
  - OpenOCD, PyOCD
  - avrdude
  - urJTAG, openFPGALoader
- **Community support**: GitHub issues, Reddit, Hackaday, forums.


### Features

- **Multi-architecture support**: Compatible with AVR (ISP), ARM Cortex-M (CMSIS-DAP), and CPLD (JTAG).
- **In-System Programming (ISP)**: Flash microcontrollers without desoldering.
- **Real-time debugging**: Step-through and breakpoint debugging with OpenOCD and PyOCD.
- **JTAG boundary-scan**: For CPLD configuration and board testing.
- **Configurable GPIOs**: Adaptable for use as JTAG, SWD, or ISP lines.
- **USB 2.0 interface**: Direct connection to host PC using USB CDC or HID.
- **Toolchain compatibility**: Works with avrdude, OpenOCD, PyOCD, urJTAG, and others.
- **Cross-platform support**: Compatible with Linux and partially supported on Windows.

### Advantages

- **Compact design**: Suitable for breadboards and embedded setups.
- **Versatility**: One device for multiple programming and debugging protocols.
- **Open-source firmware**: Fully customizable and community-supported.
- **Cost-effective**: Inexpensive alternative to commercial debuggers and programmers.
- **Linux-friendly**: No need for proprietary drivers on Linux systems.
- **Ideal for education**: Can be used in microcontroller courses and workshops.

### Limitations

- **External power required**: Cannot supply power to high-current target boards.
- **Learning curve**: Requires knowledge of protocols like CMSIS-DAP, JTAG, or AVR ISP.
- **Firmware updates**: May require reflashing to support new features or targets.
- **Partial Windows support**: Some tools may require manual setup or driver adjustments.

### Compatibility

#### CMSIS-DAP (ARM Cortex-M)

- Fully compatible with CMSIS-DAP v2.0 protocol.
- Supported by OpenOCD and PyOCD.
- Tested with:
  - STM32F0
  - RP2040 (Raspberry Pi Pico)
  - PY32 series
  - Other Cortex-M0/M3/M4 devices

#### AVR ISP

- Works with avrdude using USBasp-like interface.
- Supports:
  - ATmega328P
  - ATtiny85
  - ATmega2560
  - Other classic 8-bit AVR microcontrollers

#### CPLD JTAG

- Supports Intel (formerly Altera) MAX II series.
- Compatible with JTAG tools like urJTAG or openFPGALoader.
- JTAG signals exposed via GPIO (TDI, TDO, TCK, TMS).

### Use Cases

- Firmware flashing and in-system programming.
- Debugging embedded applications with CMSIS-DAP.
- Educational labs and training environments.
- Low-cost production line programming.
- Boundary-scan tests for hardware bring-up.
- CPLD configuration and prototyping.

### Resources

- **Firmware**: [wagiminator/CH552-DAPLink](https:)
- **CH552 Datasheet**: Available from WCH official website.
- **Tools**:
  - OpenOCD, PyOCD
  - avrdude
  - urJTAG, openFPGALoader
- **Community support**: GitHub issues, Reddit, Hackaday, forums.
```
