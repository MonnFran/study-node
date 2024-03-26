const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

// le decimos que por defecto agarre el punto
const folder = process.argv[2] ?? '.'

async function ls (directory) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pc.red(`Error al leer el directorio: ${folder}`))
    process.exit(1)
  }
  // mapeamos todos los archivos que estamos
  // leyendoy recuperaremos la info de cada archivo
  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath) // stat da lka info del archivo
    } catch {
      console.log(`No se pudo leer el archivo ${filePath}`)
      process.exit(1)
    }
    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : '-'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
    // listar para cada archivo toda su info, aqui estan todas las promesas
  })
  // aqui esperaremos todas las promesas
  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(filesInfo => {
    console.log(filesInfo)
  })
}

ls(folder)
