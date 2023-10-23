import { Module } from "@nestjs/common";
import { UserModule } from "./UserAccount/User.module";
import { AuthorModule } from "./Author/Author.module";
import { BookModule } from "./Book/Book.module";
import { ImageModule } from "./Image/Image.module";
import { GenreModule } from "./Genre/Genre.module";
import { CommentModule } from "./Comment/Comment.module";
import { GroupDetailsModule } from "./GroupDetails/GroupDetails.module";
import { TagModule } from "./Tag/Tag.module";
import { TopicModule } from "./Topic/Topic.module";

@Module({
  imports: [
    UserModule,
    AuthorModule,
    BookModule,
    ImageModule,
    GenreModule,
    AuthorModule,
    CommentModule,
    GroupDetailsModule,
    TagModule,
    TopicModule,
  ],
})
export class ServerModule {}
