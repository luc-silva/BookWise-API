import { Controller } from "@nestjs/common";

@Controller("/book")
export class BookController {

}
/**
 * bookRouter.post("/", protectedRoute, imageUploader, createBook);
bookRouter.get("/:id", protectedRoute, getBookDetails);
bookRouter.delete("/:id", protectedRoute, deleteBook);
bookRouter.patch("/:id", protectedRoute, updateBook);
 */