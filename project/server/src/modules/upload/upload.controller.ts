import { Request, Response } from "express";
import path from "path";
import { readFile } from 'fs'
import { ApiResponse } from "../../shared/types/api.response";
import { saveFile, uploadMiddleware } from "./upload.service";

export async function uploadFile(req: Request, res: Response<ApiResponse<{ url: string }>>) {
   try {
      uploadMiddleware.single('file')
      const file = req.file
      if (file) {
         console.log({ file });

         saveFile(file.destination)
         res.send({ code: 200 })
      } else {
         res.send({ code: 403 })
      }
   } catch (e) {
      res.send({ code: 500 })
   }
}

export async function getFile(req, res) {
   const { filename } = req.params;
   const file = path.join(__dirname, "./uploads", filename);

   readFile(file, (err, data) => {
      if (err) {
         console.error(err);
         res.status(500).send("Error reading file");
      } else {
         res.send(data);
      }
   });
}