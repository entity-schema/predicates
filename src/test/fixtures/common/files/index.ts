import * as diskFile from './entities/disk-file.schema.json'
import * as imageFile from './entities/image-file.schema.json'
import * as zipFile from './entities/zip-file.schema.json'
import * as diskFileReference from './references/disk-file-reference.schema.json'
import * as imageFileReference from './references/image-file-reference.schema.json'
import * as zipFileReference from './references/zip-file-reference.schema.json'
import * as fileMeta from './file-meta.schema.json'
import * as filePath from './file-path.schema.json'
import * as imageMeta from './image-file-meta.schema.json'

export const fileSchemas = [
  diskFile, imageFile, zipFile, diskFileReference, imageFileReference,
  zipFileReference, fileMeta, filePath, imageMeta
]

export const fileSchemaMap = {
  diskFile, imageFile, zipFile, diskFileReference, imageFileReference,
  zipFileReference, fileMeta, filePath, imageMeta
}
