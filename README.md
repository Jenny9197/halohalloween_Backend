# halohalloween_Backend

# HANGHAE 99 Front-Backend MINI PROJECT

# 1. Project: Halohalloweens

Be safe this Halloween at home!

It is a small gathering project where you can meet people and share the joy of Halloween.

# 2.Meeting At...

### About meeting times and meetings

# -Code/DataBase Rule

## Code naming convention

- Tab Space: 2
- CamelCase
- The function is designed so that the verb comes first (e.g. delete: delete, user lookup: findUser)

### prettier

```
{
	"singleQuote": true,
	"semi": true,
	"useTabs": false,
	"tabWidth": 2,
	"trailingComma": "all",
	"printWidth": 80
  }
```
## 데이터베이스 테이블 규칙

1. Use uppercase letters for table names
2. Meaningful table names can contain up to 2 words
3. Words are composed of ‘_’ between words.
4. Each word can be up to 8 characters long

- Notation method
1. Ex) User table: USER
2. Example) Comment table of posts: POSTING_REPLY

# 3. Step

## FrontEnd:

- ~Monday 9pm: Basic screen configuration
- Tuesday~Thursday 9pm: Basic screen implementation and backend communication test through axios
- Thu-Fri: Implementation of insufficient functions, implementation and testing of additional functions while taking time
- Saturday: finishing work and video production

## BackEnd:

- ~Monday 9pm: Database configuration, database type selection
- Tuesday~Wednesday 9pm: API implementation and front-end communication test through axios
- Thu-Fri: Implementation and testing of additional features
- Saturday finishing work and video production

# 4. Project Stack:

[Stack](https://www.notion.so/212431407ef94cbabd7a8a00caa967aa)

# 5. 필요기능:

1. This is a description of the necessary functions (APIs).

### Main - 
Essential API

---

- join the membership
- log in
- Log out
- Get login information
- Token

- Load Posts
- Post registration
- Edit post
- Delete post

### More - 기본적인 기능이 끝난후 구현해야할 기능들입니다

---

- Import comments
- Register a comment
- Edit comments
- Delete comments

### Advanced - These are the functions to be implemented when there is time to spare.

---

- Add post tag
- Search posts by tag

# wireframe

---

## wireframe

![메인페이지@3x.png](%E1%84%92%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A2%2099%20Front-Backend%20%E1%84%86%E1%85%B5%E1%84%82%E1%85%B5%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%208c919c7fa65a4ac38631587edf6095c4/%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B53x.png)

![소개페이지@3x.png](%E1%84%92%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A2%2099%20Front-Backend%20%E1%84%86%E1%85%B5%E1%84%82%E1%85%B5%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%208c919c7fa65a4ac38631587edf6095c4/%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B53x.png)

![포스팅페이지@3x.png](%E1%84%92%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A2%2099%20Front-Backend%20%E1%84%86%E1%85%B5%E1%84%82%E1%85%B5%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%208c919c7fa65a4ac38631587edf6095c4/%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%B5%E1%86%BC%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B53x.png)

![모달띄우기@3x.png](%E1%84%92%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A2%2099%20Front-Backend%20%E1%84%86%E1%85%B5%E1%84%82%E1%85%B5%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%208c919c7fa65a4ac38631587edf6095c4/%E1%84%86%E1%85%A9%E1%84%83%E1%85%A1%E1%86%AF%E1%84%84%E1%85%B4%E1%84%8B%E1%85%AE%E1%84%80%E1%85%B53x.png)

![모달2개@3x.png](%E1%84%92%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A2%2099%20Front-Backend%20%E1%84%86%E1%85%B5%E1%84%82%E1%85%B5%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%208c919c7fa65a4ac38631587edf6095c4/%E1%84%86%E1%85%A9%E1%84%83%E1%85%A1%E1%86%AF2%E1%84%80%E1%85%A23x.png)

![회원가입@3x.png](%E1%84%92%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A2%2099%20Front-Backend%20%E1%84%86%E1%85%B5%E1%84%82%E1%85%B5%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%208c919c7fa65a4ac38631587edf6095c4/%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B83x.png)

![팀원정보@3x.png](%E1%84%92%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A2%2099%20Front-Backend%20%E1%84%86%E1%85%B5%E1%84%82%E1%85%B5%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%208c919c7fa65a4ac38631587edf6095c4/%E1%84%90%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%87%E1%85%A93x.png)

![로그인@3x.png](%E1%84%92%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A2%2099%20Front-Backend%20%E1%84%86%E1%85%B5%E1%84%82%E1%85%B5%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%208c919c7fa65a4ac38631587edf6095c4/%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB3x.png)

# API List

[랜딩페이지 ](https://www.notion.so/9e6acf95250e4e5195ed8e3687e192f2)

[유저 API](https://www.notion.so/4c664fef2477464c85201ba793ead595)

[게시물 API](https://www.notion.so/fce32b93e9f842acb21f4d62a2c3c55e)

[댓글 API](https://www.notion.so/9fc0433fe5ae468d9db09e056e4dd3db)

# -DataSchema

[유저(USER)](https://www.notion.so/1ebee826389a4679b231ca24bf0e88c9)

[게시글(POSTING)](https://www.notion.so/3eece38e38b84684a447c0be0f24146e)

[댓글(REPLY)](https://www.notion.so/36077ce55075435fb82dfaea237aa9b9)

# 6. Work Flow

[Main](https://www.notion.so/666cd789f005432fbb683064770028ec)

[More](https://www.notion.so/66b51c2af659414f8a09b25a018744ef)

[Advanced](https://www.notion.so/1d62e9de623b4251b0cc84a3e65ddbb9)

# 6. Members:

[Members](https://www.notion.so/37c74da611034ea48dc0515324b21819)
