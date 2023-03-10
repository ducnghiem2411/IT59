import multer from 'multer'
import path from 'path'
import { PORT } from '../../shared/config'

// Set storage engine
const storage = multer.diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  },
})

// Check file type
function checkFileType(file: Express.Multer.File, cb: multer.FileFilterCallback) {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png|gif/
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  // Check MIME type
  const mimetype = filetypes.test(file.mimetype)

  if (mimetype && extname) {
    return cb(null, true)
  } else {
    cb(new Error('Only images are allowed'))
  }
}

// Init upload
export const uploadMiddleware = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

export function getFileUrl(filename: string) {
  // http://localhost:3001/upload/read/file-1677208085307.png
  return `http://localhost:${PORT}/upload/read/${filename}`
}
