'use strict'

// this section will probably be used during the design phase of the DEX loader, and thrown away afterward

var opcode_format = []
opcode_format[0x00]={ code_units:1, max_registers:0, bit_sizes:"x" }
opcode_format[0x01]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x02]={ code_units:2, max_registers:2, bit_sizes:"x" }
opcode_format[0x03]={ code_units:3, max_registers:2, bit_sizes:"x" }
opcode_format[0x04]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x05]={ code_units:2, max_registers:2, bit_sizes:"x" }
opcode_format[0x06]={ code_units:3, max_registers:2, bit_sizes:"x" }
opcode_format[0x07]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x08]={ code_units:2, max_registers:2, bit_sizes:"x" }
opcode_format[0x09]={ code_units:3, max_registers:2, bit_sizes:"x" }
opcode_format[0x0a]={ code_units:1, max_registers:1, bit_sizes:"x" }
opcode_format[0x0b]={ code_units:1, max_registers:1, bit_sizes:"x" }
opcode_format[0x0c]={ code_units:1, max_registers:1, bit_sizes:"x" }
opcode_format[0x0d]={ code_units:1, max_registers:1, bit_sizes:"x" }
opcode_format[0x0e]={ code_units:1, max_registers:0, bit_sizes:"x" }
opcode_format[0x0f]={ code_units:1, max_registers:1, bit_sizes:"x" }
opcode_format[0x10]={ code_units:1, max_registers:1, bit_sizes:"x" }
opcode_format[0x11]={ code_units:1, max_registers:1, bit_sizes:"x" }
opcode_format[0x12]={ code_units:1, max_registers:1, bit_sizes:"n" }
opcode_format[0x13]={ code_units:2, max_registers:1, bit_sizes:"s" }
opcode_format[0x14]={ code_units:3, max_registers:1, bit_sizes:"i" }
opcode_format[0x15]={ code_units:2, max_registers:1, bit_sizes:"h" }
opcode_format[0x16]={ code_units:2, max_registers:1, bit_sizes:"s" }
opcode_format[0x17]={ code_units:3, max_registers:1, bit_sizes:"i" }
opcode_format[0x18]={ code_units:5, max_registers:1, bit_sizes:"l" }
opcode_format[0x19]={ code_units:2, max_registers:1, bit_sizes:"h" }
opcode_format[0x1a]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x1b]={ code_units:3, max_registers:1, bit_sizes:"c" }
opcode_format[0x1c]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x1d]={ code_units:1, max_registers:1, bit_sizes:"x" }
opcode_format[0x1e]={ code_units:1, max_registers:1, bit_sizes:"x" }
opcode_format[0x1f]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x20]={ code_units:2, max_registers:2, bit_sizes:"c" }
opcode_format[0x21]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x22]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x23]={ code_units:2, max_registers:2, bit_sizes:"c" }
opcode_format[0x24]={ code_units:3, max_registers:5, bit_sizes:"c" }
opcode_format[0x25]={ code_units:3, max_registers:-1, bit_sizes:"c" }
opcode_format[0x26]={ code_units:3, max_registers:1, bit_sizes:"t" }
opcode_format[0x27]={ code_units:1, max_registers:1, bit_sizes:"x" }
opcode_format[0x28]={ code_units:1, max_registers:0, bit_sizes:"t" }
opcode_format[0x29]={ code_units:2, max_registers:0, bit_sizes:"t" }
opcode_format[0x2a]={ code_units:3, max_registers:0, bit_sizes:"t" }
opcode_format[0x2b]={ code_units:3, max_registers:1, bit_sizes:"t" }
opcode_format[0x2c]={ code_units:3, max_registers:1, bit_sizes:"t" }
opcode_format[0x2d]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x2e]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x2f]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x30]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x31]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x32]={ code_units:2, max_registers:2, bit_sizes:"t" }
opcode_format[0x33]={ code_units:2, max_registers:2, bit_sizes:"t" }
opcode_format[0x34]={ code_units:2, max_registers:2, bit_sizes:"t" }
opcode_format[0x35]={ code_units:2, max_registers:2, bit_sizes:"t" }
opcode_format[0x36]={ code_units:2, max_registers:2, bit_sizes:"t" }
opcode_format[0x37]={ code_units:2, max_registers:2, bit_sizes:"t" }
opcode_format[0x38]={ code_units:2, max_registers:1, bit_sizes:"t" }
opcode_format[0x39]={ code_units:2, max_registers:1, bit_sizes:"t" }
opcode_format[0x3a]={ code_units:2, max_registers:1, bit_sizes:"t" }
opcode_format[0x3b]={ code_units:2, max_registers:1, bit_sizes:"t" }
opcode_format[0x3c]={ code_units:2, max_registers:1, bit_sizes:"t" }
opcode_format[0x3d]={ code_units:2, max_registers:1, bit_sizes:"t" }
opcode_format[0x44]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x45]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x46]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x47]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x48]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x49]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x4a]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x4b]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x4c]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x4d]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x4e]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x4f]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x50]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x51]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x52]={ code_units:2, max_registers:2, bit_sizes:"c" }
opcode_format[0x53]={ code_units:2, max_registers:2, bit_sizes:"c" }
opcode_format[0x54]={ code_units:2, max_registers:2, bit_sizes:"c" }
opcode_format[0x55]={ code_units:2, max_registers:2, bit_sizes:"c" }
opcode_format[0x56]={ code_units:2, max_registers:2, bit_sizes:"c" }
opcode_format[0x57]={ code_units:2, max_registers:2, bit_sizes:"c" }
opcode_format[0x58]={ code_units:2, max_registers:2, bit_sizes:"c" }
opcode_format[0x59]={ code_units:2, max_registers:2, bit_sizes:"c" }
opcode_format[0x5a]={ code_units:2, max_registers:2, bit_sizes:"c" }
opcode_format[0x5b]={ code_units:2, max_registers:2, bit_sizes:"c" }
opcode_format[0x5c]={ code_units:2, max_registers:2, bit_sizes:"c" }
opcode_format[0x5d]={ code_units:2, max_registers:2, bit_sizes:"c" }
opcode_format[0x5e]={ code_units:2, max_registers:2, bit_sizes:"c" }
opcode_format[0x5f]={ code_units:2, max_registers:2, bit_sizes:"c" }
opcode_format[0x60]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x61]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x62]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x63]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x64]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x65]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x66]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x67]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x68]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x69]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x6a]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x6b]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x6c]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x6d]={ code_units:2, max_registers:1, bit_sizes:"c" }
opcode_format[0x6e]={ code_units:3, max_registers:5, bit_sizes:"c" }
opcode_format[0x6f]={ code_units:3, max_registers:5, bit_sizes:"c" }
opcode_format[0x70]={ code_units:3, max_registers:5, bit_sizes:"c" }
opcode_format[0x71]={ code_units:3, max_registers:5, bit_sizes:"c" }
opcode_format[0x72]={ code_units:3, max_registers:5, bit_sizes:"c" }
opcode_format[0x74]={ code_units:3, max_registers:-1, bit_sizes:"c" }
opcode_format[0x75]={ code_units:3, max_registers:-1, bit_sizes:"c" }
opcode_format[0x76]={ code_units:3, max_registers:-1, bit_sizes:"c" }
opcode_format[0x77]={ code_units:3, max_registers:-1, bit_sizes:"c" }
opcode_format[0x78]={ code_units:3, max_registers:-1, bit_sizes:"c" }
opcode_format[0x7b]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x7c]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x7d]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x7e]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x7f]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x80]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x81]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x82]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x83]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x84]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x85]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x86]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x87]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x88]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x89]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x8a]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x8b]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x8c]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x8d]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x8e]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x8f]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0x90]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x91]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x92]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x93]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x94]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x95]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x96]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x97]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x98]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x99]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x9a]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x9b]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x9c]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x9d]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x9e]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0x9f]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xa0]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xa1]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xa2]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xa3]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xa4]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xa5]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xa6]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xa7]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xa8]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xa9]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xaa]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xab]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xac]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xad]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xae]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xaf]={ code_units:2, max_registers:3, bit_sizes:"x" }
opcode_format[0xb0]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xb1]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xb2]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xb3]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xb4]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xb5]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xb6]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xb7]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xb8]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xb9]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xba]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xbb]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xbc]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xbd]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xbe]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xbf]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xc0]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xc1]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xc2]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xc3]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xc4]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xc5]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xc6]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xc7]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xc8]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xc9]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xca]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xcb]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xcc]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xcd]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xce]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xcf]={ code_units:1, max_registers:2, bit_sizes:"x" }
opcode_format[0xd0]={ code_units:2, max_registers:2, bit_sizes:"s" }
opcode_format[0xd1]={ code_units:2, max_registers:2, bit_sizes:"s" }
opcode_format[0xd2]={ code_units:2, max_registers:2, bit_sizes:"s" }
opcode_format[0xd3]={ code_units:2, max_registers:2, bit_sizes:"s" }
opcode_format[0xd4]={ code_units:2, max_registers:2, bit_sizes:"s" }
opcode_format[0xd5]={ code_units:2, max_registers:2, bit_sizes:"s" }
opcode_format[0xd6]={ code_units:2, max_registers:2, bit_sizes:"s" }
opcode_format[0xd7]={ code_units:2, max_registers:2, bit_sizes:"s" }
opcode_format[0xd8]={ code_units:2, max_registers:2, bit_sizes:"b" }
opcode_format[0xd9]={ code_units:2, max_registers:2, bit_sizes:"b" }
opcode_format[0xda]={ code_units:2, max_registers:2, bit_sizes:"b" }
opcode_format[0xdb]={ code_units:2, max_registers:2, bit_sizes:"b" }
opcode_format[0xdc]={ code_units:2, max_registers:2, bit_sizes:"b" }
opcode_format[0xdd]={ code_units:2, max_registers:2, bit_sizes:"b" }
opcode_format[0xde]={ code_units:2, max_registers:2, bit_sizes:"b" }
opcode_format[0xdf]={ code_units:2, max_registers:2, bit_sizes:"b" }
opcode_format[0xe0]={ code_units:2, max_registers:2, bit_sizes:"b" }
opcode_format[0xe1]={ code_units:2, max_registers:2, bit_sizes:"b" }
opcode_format[0xe2]={ code_units:2, max_registers:2, bit_sizes:"b" }


