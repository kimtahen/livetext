2021.07
## Introduction
동아리에서 특정 주제로 간단하게 발표를 해야할 때가 있었습니다. 조금 색다른 발표를 하기 위해서 간단한 socket.io 를 이용한 아주 간단한 서비스를 만들어 보았습니다.

## Description
host가 마크다운으로 글을 작성하면 client는 host가 입력하는 문장을 실시간으로 볼 수 있습니다. host는 아이디와 패스워드로 로그인 할 수 있고, 마크다운 에디터를 통해서 입력하면 그대로 client의 웹페이지에 나타나게 됩니다.

서버는 nodejs의 express를 사용하였고, client와 host의 페이지는 reactjs로 구성하였습니다. 그리고 실시간 전송은 socket.io를 사용하여 구현하였습니다.

client는 SERVER_URL로 접속하면 되고 host는 SERVER_URL/host 로 접속하여 로그인해서 글 작성을 시작할 수 있습니다.

## Preview

![Screenshot from 2022-02-12 17-27-02](https://user-images.githubusercontent.com/52111798/153708078-ed457c6d-2601-4dd0-aefb-9579954d49bb.png)

![Screenshot from 2022-02-12 17-27-13](https://user-images.githubusercontent.com/52111798/153708080-596915bf-6c0b-4698-99a5-8a862c32689a.png)

왼쪽 창 두 개는 client, 오른쪽 창은 host입니다. 로그인을 하면 실시간 글 작성을 시작할 수 있습니다.

![Screenshot from 2022-02-12 17-30-51](https://user-images.githubusercontent.com/52111798/153708084-cc5b2abe-654c-4073-b01a-fe3d2f1f251a.png)

오른쪽의 마크다운 에디터에 글을 작성하면 왼쪽 client의 웹페이지에 실시간으로 마크다운으로 글이 나타납니다.