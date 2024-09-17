# Blog_Application

글 쓰기, 수정, 삭제가 가능한 간단한 blog 프로그램입니다.
frontend는 react, backend는 node.js로 구현되었습니다.

## 목차

1. [파일 구조 (File Structure)](#파일-구조-file-structure)
2. [예시 (Screenshot)](#예시-screenshot)
3. [기능 (Features)](#기능-features)
4. [설치 (Installation)](#설치-installation)
5. [실행 (Usage)](#실행-usage)

## 파일 구조 (File Structure)
```bash
project-root/
├── src/
│ ├── component/
│ │        ├── DeletePostButton.jsx
│ │        ├── EditPostButton.jsx
│ │        ├── NewPostButton.jsx
│ │        ├── PostForm.jsx
│ │        ├── PostItem.jsx
│ │        └── PostListButton.jsx
│ ├── pages/
│ │     ├── EditPost.jsx
│ │     ├── NewPost.jsx
│ │     ├── PostDetail.jsx
│ │     └── PostList.jsx
│ ├── services/
│ │     ├── formatDateToKoreanTime.js
│ │     └── postsService.js
│ ├── styles/
│ │     └── global-styles.js
│ ├── App.jsx
│ └── Main.jsx
├── package.json
└── README.md
```

## 예시 (Screenshot)

<img src="public/blog_example.gif" width="1080" height=auto/>

## 기능 (Features)
1. 우측 상단 '+' 버튼을 누르면 제목과 본문을 작성할 수 있습니다.
2. 'save'를 누르면 데이터가 데이터베이스에 저장됩니다. (author는 임의로 'ellie'가 작성됩니다. 추후 로그인 기능 구현 후 업데이트 예정)
3. 작성된 글을 확인할 수 있으며 수정과 삭제가 가능합니다.
4. 우측 상단 리스트 버튼을 누르면 글 목록을 확인할 수 있습니다.
5. 게시글 리스트에서 각 글을 클릭하면 세부 내용과 작성 시간을 확인할 수 있습니다.

## 설치 (Installation)
```bash
git clone https://github.com/PARK-SSOYEON/Blog_Front.git
git clone https://github.com/PARK-SSOYEON/Blog_Node_Back.git
cd Blog_Front
npm install

//other terminal (Backend)
git clone https://github.com/PARK-SSOYEON/Blog_Node_Back.git
cd Blog_Node_Back
npm install
```

## 실행 (Usage)
```bash
//Blog_Front
npm start
//http://localhost:5173/posts

//Blog_Node_Back
npm start
```
