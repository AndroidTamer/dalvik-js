'use strict'

// Dalvik VM opcode list

var opcode = []

opcode[0x00] = { name: "nop" }

opcode[0x01] = { name: "move" }
opcode[0x02] = { name: "move/from16" }
opcode[0x03] = { name: "move/16" }
opcode[0x04] = { name: "move-wide" }
opcode[0x05] = { name: "move-wide/from16" }
opcode[0x06] = { name: "move-wide/16" }
opcode[0x07] = { name: "move-object" }
opcode[0x08] = { name: "move-object/from16" }
opcode[0x09] = { name: "move-object/16" }
opcode[0x0a] = { name: "move-result" }
opcode[0x0b] = { name: "move-result-wide" }
opcode[0x0c] = { name: "move-result-object" }
opcode[0x0d] = { name: "move-exception" }

opcode[0x0e] = { name: "return-void" }
opcode[0x0f] = { name: "return" }
opcode[0x10] = { name: "return-wide" }
opcode[0x11] = { name: "return-object" }

opcode[0x12] = { name: "const/4" } 
opcode[0x13] = { name: "const/16" } 
opcode[0x14] = { name: "const" } 
opcode[0x15] = { name: "const/high16" } 
opcode[0x16] = { name: "const-wide/16" } 
opcode[0x17] = { name: "const-wide/32" } 
opcode[0x18] = { name: "const-wide" } 
opcode[0x19] = { name: "const-wide/high16" } 
opcode[0x1a] = { name: "const-string" } 
opcode[0x1b] = { name: "const-string/jumbo" } 
opcode[0x1c] = { name: "const-class" } 

opcode[0x1d] = { name: "monitor-enter" } 
opcode[0x1e] = { name: "monitor-exit" } 

opcode[0x1f] = { name: "check-cast" } 
opcode[0x20] = { name: "instance-of" } 

opcode[0x21] = { name: "array-length" } 

opcode[0x22] = { name: "new-instance" } 
opcode[0x23] = { name: "new-array" } 
opcode[0x24] = { name: "filled-new-array" } 
opcode[0x25] = { name: "filled-new-array/range" } 
opcode[0x26] = { name: "fill-array-data" } 

opcode[0x27] = { name: "throw" } 

opcode[0x28] = { name: "goto" } 
opcode[0x29] = { name: "goto/16" } 
opcode[0x2a] = { name: "goto/32" } 

opcode[0x2b] = { name: "packed-switch" } 
opcode[0x2c] = { name: "sparse-switch" } 

opcode[0x2d] = { name: "cmpl-float" } 
opcode[0x2e] = { name: "cmpg-float" } 
opcode[0x2f] = { name: "cmpl-double" } 
opcode[0x30] = { name: "cmpg-double" } 
opcode[0x31] = { name: "cmp-long" } 

opcode[0x32] = { name: "if-eq" } 
opcode[0x33] = { name: "if-ne" } 
opcode[0x34] = { name: "if-lt" } 
opcode[0x35] = { name: "if-ge" } 
opcode[0x36] = { name: "if-gt" } 
opcode[0x37] = { name: "if-le" } 
opcode[0x38] = { name: "if-eqz" } 
opcode[0x39] = { name: "if-nez" } 
opcode[0x3a] = { name: "if-ltz" } 
opcode[0x3b] = { name: "if-gez" } 
opcode[0x3c] = { name: "if-gtz" } 
opcode[0x3d] = { name: "if-lez" } 

opcode[0x44] = { name: "aget" } 
opcode[0x45] = { name: "aget-wide" } 
opcode[0x46] = { name: "aget-object" } 
opcode[0x47] = { name: "aget-boolean" } 
opcode[0x48] = { name: "aget-byte" } 
opcode[0x49] = { name: "aget-char" } 
opcode[0x4a] = { name: "aget-short" } 

opcode[0x4b] = { name: "aput" } 
opcode[0x4c] = { name: "aput-wide" } 
opcode[0x4d] = { name: "aput-object" } 
opcode[0x4e] = { name: "aput-boolean" } 
opcode[0x4f] = { name: "aput-byte" } 
opcode[0x50] = { name: "aput-char" } 
opcode[0x51] = { name: "aput-short" } 

opcode[0x52] = { name: "iget" } 
opcode[0x53] = { name: "iget-wide" } 
opcode[0x54] = { name: "iget-object" } 
opcode[0x55] = { name: "iget-boolean" } 
opcode[0x56] = { name: "iget-byte" } 
opcode[0x57] = { name: "iget-char" } 
opcode[0x58] = { name: "iget-short" } 

opcode[0x59] = { name: "iput" } 
opcode[0x5a] = { name: "iput-wide" } 
opcode[0x5b] = { name: "iput-object" } 
opcode[0x5c] = { name: "iput-boolean" } 
opcode[0x5d] = { name: "iput-byte" } 
opcode[0x5e] = { name: "iput-char" } 
opcode[0x5f] = { name: "iput-short" } 

opcode[0x60] = { name: "sget" } 
opcode[0x61] = { name: "sget-wide" } 
opcode[0x62] = { name: "sget-object" } 
opcode[0x63] = { name: "sget-boolean" } 
opcode[0x64] = { name: "sget-byte" } 
opcode[0x65] = { name: "sget-char" } 
opcode[0x66] = { name: "sget-short" } 

opcode[0x67] = { name: "sput" } 
opcode[0x68] = { name: "sput-wide" } 
opcode[0x69] = { name: "sput-object" } 
opcode[0x6a] = { name: "sput-boolean" } 
opcode[0x6b] = { name: "sput-byte" } 
opcode[0x6c] = { name: "sput-char" } 
opcode[0x6d] = { name: "sput-short" } 

opcode[0x6e] = { name: "invoke-virtual" } 
opcode[0x6f] = { name: "invoke-super" } 
opcode[0x70] = { name: "invoke-direct" } 
opcode[0x71] = { name: "invoke-static" } 
opcode[0x72] = { name: "invoke-interface" } 
opcode[0x74] = { name: "invoke-virtual/range" } 
opcode[0x75] = { name: "invoke-super/range" } 
opcode[0x76] = { name: "invoke-direct/range" } 
opcode[0x77] = { name: "invoke-static/range" } 
opcode[0x78] = { name: "invoke-interface/range" } 

opcode[0x7b] = { name: "neg-int" } 
opcode[0x7c] = { name: "not-int" } 
opcode[0x7d] = { name: "neg-long" } 
opcode[0x7e] = { name: "not-long" } 
opcode[0x7f] = { name: "neg-float" } 
opcode[0x80] = { name: "neg-double" } 

opcode[0x81] = { name: "int-to-long" } 
opcode[0x82] = { name: "int-to-float" } 
opcode[0x83] = { name: "int-to-double" } 
opcode[0x84] = { name: "long-to-int" } 
opcode[0x85] = { name: "long-to-float" } 
opcode[0x86] = { name: "long-to-double" } 
opcode[0x87] = { name: "float-to-int" } 
opcode[0x88] = { name: "float-to-long" } 
opcode[0x89] = { name: "float-to-double" } 
opcode[0x8a] = { name: "double-to-int" } 
opcode[0x8b] = { name: "double-to-long" } 
opcode[0x8c] = { name: "double-to-float" } 
opcode[0x8d] = { name: "int-to-byte" } 
opcode[0x8e] = { name: "int-to-char" } 
opcode[0x8f] = { name: "int-to-short" } 

opcode[0x90] = { name: "add-int" } 
opcode[0x91] = { name: "sub-int" } 
opcode[0x92] = { name: "mul-int" } 
opcode[0x93] = { name: "div-int" } 
opcode[0x94] = { name: "rem-int" } 
opcode[0x95] = { name: "and-int" } 
opcode[0x96] = { name: "or-int" } 
opcode[0x97] = { name: "xor-int" } 
opcode[0x98] = { name: "shl-int" } 
opcode[0x99] = { name: "shr-int" } 
opcode[0x9a] = { name: "ushr-int" } 


opcode[0x9b] = { name: "add-long" } 
opcode[0x9c] = { name: "sub-long" } 
opcode[0x9d] = { name: "mul-long" } 
opcode[0x9e] = { name: "div-long" } 
opcode[0x9f] = { name: "rem-long" } 
opcode[0xa0] = { name: "and-long" } 
opcode[0xa1] = { name: "or-long" } 
opcode[0xa2] = { name: "xor-long" } 
opcode[0xa3] = { name: "shl-long" } 
opcode[0xa4] = { name: "shr-long" } 
opcode[0xa5] = { name: "ushr-long" } 


opcode[0xa6] = { name: "add-float" } 
opcode[0xa7] = { name: "sub-float" } 
opcode[0xa8] = { name: "mul-float" } 
opcode[0xa9] = { name: "div-float" } 
opcode[0xaa] = { name: "rem-float" } 


opcode[0xab] = { name: "add-double" } 
opcode[0xac] = { name: "sub-double" } 
opcode[0xad] = { name: "mul-double" } 
opcode[0xae] = { name: "div-double" } 
opcode[0xaf] = { name: "rem-double" } 


opcode[0xb0] = { name: "add-int/2addr" } 
opcode[0xb1] = { name: "sub-int/2addr" } 
opcode[0xb2] = { name: "mul-int/2addr" } 
opcode[0xb3] = { name: "div-int/2addr" } 
opcode[0xb4] = { name: "rem-int/2addr" } 
opcode[0xb5] = { name: "and-int/2addr" } 
opcode[0xb6] = { name: "or-int/2addr" } 
opcode[0xb7] = { name: "xor-int/2addr" } 
opcode[0xb8] = { name: "shl-int/2addr" } 
opcode[0xb9] = { name: "shr-int/2addr" } 
opcode[0xba] = { name: "ushr-int/2addr" } 


opcode[0xbb] = { name: "add-long/2addr" } 
opcode[0xbc] = { name: "sub-long/2addr" } 
opcode[0xbd] = { name: "mul-long/2addr" } 
opcode[0xbe] = { name: "div-long/2addr" } 
opcode[0xbf] = { name: "rem-long/2addr" } 
opcode[0xc0] = { name: "and-long/2addr" } 
opcode[0xc1] = { name: "or-long/2addr" } 
opcode[0xc2] = { name: "xor-long/2addr" } 
opcode[0xc3] = { name: "shl-long/2addr" } 
opcode[0xc4] = { name: "shr-long/2addr" } 
opcode[0xc5] = { name: "ushr-long/2addr" } 


opcode[0xc6] = { name: "add-float/2addr" } 
opcode[0xc7] = { name: "sub-float/2addr" } 
opcode[0xc8] = { name: "mul-float/2addr" } 
opcode[0xc9] = { name: "div-float/2addr" } 
opcode[0xca] = { name: "rem-float/2addr" } 


opcode[0xcb] = { name: "add-double/2addr" } 
opcode[0xcc] = { name: "sub-double/2addr" } 
opcode[0xcd] = { name: "mul-double/2addr" } 
opcode[0xce] = { name: "div-double/2addr" } 
opcode[0xcf] = { name: "rem-double/2addr" } 


opcode[0xd0] = { name: "add-int/lit16" } 
opcode[0xd1] = { name: "rsub-int" } 
opcode[0xd2] = { name: "mul-int/lit16" } 
opcode[0xd3] = { name: "div-int/lit16" } 
opcode[0xd4] = { name: "rem-int/lit16" } 
opcode[0xd5] = { name: "and-int/lit16" } 
opcode[0xd6] = { name: "or-int/lit16" } 
opcode[0xd7] = { name: "xor-int/lit16" } 


opcode[0xd8] = { name: "add-int/lit8" } 
opcode[0xd9] = { name: "rsub-int/lit8" } 
opcode[0xda] = { name: "mul-int/lit8" } 
opcode[0xdb] = { name: "div-int/lit8" } 
opcode[0xdc] = { name: "rem-int/lit8" } 
opcode[0xdd] = { name: "and-int/lit8" } 
opcode[0xde] = { name: "or-int/lit8" } 
opcode[0xdf] = { name: "xor-int/lit8" } 
opcode[0xe0] = { name: "shl-int/lit8" } 
opcode[0xe1] = { name: "shr-int/lit8" } 
opcode[0xe2] = { name: "ushr-int/lit8" } 

