---
# Este es el título del artículo
title: Información General
# Puedes personalizar la imagen de portada
cover: /assets/images/cover1.jpg
# Este es el ícono de la página
icon: file
# Este es el orden en la barra lateral
order: 5
# Configurar el autor
author: Cesar Bautista
# Configurar la fecha de escritura
date: 2020-01-01
# Una página puede tener múltiples categorías
category:
    - Guía de uso
# Una página puede tener múltiples etiquetas
tag:
    - Configuración de la página
    - Guía de uso
# Esta página estará fijada en la lista de artículos
sticky: true
# Esta página aparecerá en los artículos destacados
star: true

---

# Información General

El Programador Multi-Protocolo CH552 es una herramienta de desarrollo compacta y versátil diseñada para aplicaciones de sistemas embebidos de alta precisión. Es compatible con una amplia gama de protocolos y arquitecturas de dispositivos, incluyendo AVR, ARM (CMSIS-DAP) y CPLD (MAX II). Su conectividad USB permite la interacción directa con entornos de desarrollo estándar, habilitando:

- Programación en el sistema (ISP)
- Depuración paso a paso
- Pruebas de escaneo de límites (JTAG)
- Operaciones de memoria flash

Compatible con plataformas populares como STM32, RP2040 y PY32, este programador integra líneas GPIO configurables, encabezados multi-protocolo y una entrega de energía simplificada, lo que lo hace ideal para prototipos rápidos y diagnósticos en campo.

::: warning Carga de Firmware
Para cada protocolo, se requiere cargar el firmware correspondiente en el dispositivo. Asegúrese de seguir las instrucciones específicas para cada arquitectura.
:::

## Arquitecturas Compatibles

- AVR — mediante ISP (configuración SPI)
- ARM Cortex-M — mediante CMSIS-DAP y SWD
    - RP2040
    - PY32
    - STM32
- CPLD/FPGA (MAX II) — mediante JTAG 

Todos los protocolos están expuestos mediante encabezados etiquetados o conectores JST, permitiendo un prototipado rápido y sin soldadura.

Este dispositivo se conecta a un sistema anfitrión mediante USB y permite al usuario programar y depurar varios microcontroladores y dispositivos lógicos programables.


### Características

- **Soporte multi-arquitectura**: Compatible con AVR (ISP), ARM Cortex-M (CMSIS-DAP) y CPLD (JTAG).
- **Programación en el sistema (ISP)**: Flasheo de microcontroladores sin desoldar.
- **Depuración en tiempo real**: Depuración paso a paso y puntos de interrupción con OpenOCD y PyOCD.
- **Escaneo de límites JTAG**: Para configuración de CPLD y pruebas de placas.
- **GPIOs configurables**: Adaptables para usar como líneas JTAG, SWD o ISP.
- **Interfaz USB 2.0**: Conexión directa al PC anfitrión usando USB CDC o HID.
- **Compatibilidad con herramientas**: Funciona con avrdude, OpenOCD, PyOCD, urJTAG, entre otros.
- **Soporte multiplataforma**: Compatible con Linux y parcialmente soportado en Windows.

### Ventajas

- **Diseño compacto**: Adecuado para protoboards y configuraciones embebidas.
- **Versatilidad**: Un dispositivo para múltiples protocolos de programación y depuración.
- **Firmware de código abierto**: Totalmente personalizable y con soporte comunitario.
- **Rentable**: Alternativa económica a depuradores y programadores comerciales.
- **Amigable con Linux**: No requiere controladores propietarios en sistemas Linux.
- **Ideal para educación**: Puede ser utilizado en cursos y talleres de microcontroladores.

### Limitaciones

- **Requiere alimentación externa**: No puede suministrar energía a placas objetivo de alta corriente.
- **Curva de aprendizaje**: Requiere conocimiento de protocolos como CMSIS-DAP, JTAG o AVR ISP.
- **Actualizaciones de firmware**: Puede requerir reflasheo para soportar nuevas características o objetivos.
- **Soporte parcial en Windows**: Algunas herramientas pueden requerir configuración manual o ajustes de controladores.

### Compatibilidad

#### CMSIS-DAP (ARM Cortex-M)

- Compatible con el protocolo CMSIS-DAP v2.0.
- Soportado por OpenOCD y PyOCD.
- Probado con:
  - STM32F0
  - RP2040 (Raspberry Pi Pico)
  - Serie PY32
  - Otros dispositivos Cortex-M0/M3/M4

#### AVR ISP

- Funciona con avrdude usando una interfaz similar a USBasp.
- Soporta:
  - ATmega328P
  - ATtiny85
  - ATmega2560
  - Otros microcontroladores AVR clásicos de 8 bits

#### CPLD JTAG

- Soporta la serie MAX II de Intel (anteriormente Altera).
- Compatible con herramientas JTAG como urJTAG o openFPGALoader.
- Señales JTAG expuestas mediante GPIO (TDI, TDO, TCK, TMS).

### Casos de Uso

- Flasheo de firmware y programación en el sistema.
- Depuración de aplicaciones embebidas con CMSIS-DAP.
- Laboratorios educativos y entornos de capacitación.
- Programación de líneas de producción de bajo costo.
- Pruebas de escaneo de límites para puesta en marcha de hardware.
- Configuración y prototipado de CPLD.

### Recursos

- **Firmware**: [wagiminator/CH552-DAPLink](https:)
- **Datasheet CH552**: Disponible en el sitio oficial de WCH.
- **Herramientas**:
  - OpenOCD, PyOCD
  - avrdude
  - urJTAG, openFPGALoader
- **Soporte comunitario**: Issues en GitHub, Reddit, Hackaday, foros.