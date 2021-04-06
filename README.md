# 💻 React-Native-Tutorial
### React-Native-Tutorial 저장소

<br />

## 👨🏻‍💻 React-native 내장 컴포넌트
🔖 https://reactnative.dev/docs/components-and-apis

### 🏃 Basic Components  
- View: UI 구축을 위한 가장 기본적인 구성 요소
- Text: 텍스트를 표시하기위한 구성 요소
- Image: 이미지를 표시하기위한 구성 요소
- TextInput: 키보드를 통해 앱에 텍스트를 입력하기 위한 구성 요소
- ScrollView: 여러 구성 요소 및 보기를 호스팅 할 수 있는 스크롤 컨테이너
- StyleSheet: CSS 스타일 시트와 유사한 추상화 계층을 제공

<br />

### 🏃 User Interface
- Button: 모든 플랫폼에서 렌더링되어야 하는 터치를 처리하기 위한 기본 버튼 구성 요소
- Switch: Boolean 입력을 렌더링한다

<br />

### 🏃 List Views
- FlatList: 스크롤 가능한 목록을 렌더링하는 구성 요소
- SectionList: FlatList와 유사하지만 Section 목록에 사용된다.

<br />

### 🏃 Android Components and APIs
- BackHandler: 뒤로 탐색을 위한 하드웨어 버튼 누름을 감지
- DrawerLayoutAndroid: DrawerLayoutAndroid에서 렌더링한다.
- PermissionsAndroid: Android M에 도입 된 권한 모델에 대한 엑세스를 제공
- ToastAndroid: Android Toast 알림을 만든다.

<br />

### 🏃 iOS components and APIs
- ActionsSheetIOS: iOS 작업 시트를 표시하거나 시트를 공유하는 API

<br />

### 🏃 Others
- ActivityIndicator: 원형 로딩 표시기를 표시한다.
- Alert: 지정된 제목과 메시지가 있는 경고 대화 상자를 실행한다.
- Animated: 애니메이션을 만들기 위한 라이브러리이다.
- Dimensions: 장치 크기를 가져오기 위한 인터페이스를 제공한다.
- KeyboardAvoidingView: 가상 키보드에서 자동으로 벗어나는 보기를 제공한다.
- Linking: 수신 및 발신 앱 링크와 상호 작용할 수 있는 인터페이스를 제공한다.
- Modal: Modal 콘텐츠를 표시하는 간단한 방법을 제공한다.
- PixelRatio: 장치 픽셀 밀도에 대한 액세스를 제공한다.
- RefreshControl: ScrollView pull, refresh 기능을 추가하는데 사용된다.
- StatusBar: 앱 상태 표시 줄을 제어하는 구성요소이다.


<br />

## 👨🏻‍💻 prop-types 라이브러리
🔖 props를 전달 할 때, 잘못된 타입을 전달했을 때 경고 메시지를 보내주는 라이브러리

```javascript
    MyButton.propTypes = {
        //title은 string이여야 하며, 필수로 입력해야 한다.
        //onPress라는 함수가 필수적으로 입력해야 한다.
        title: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
    };

```

<br />

## 👨🏻‍💻 JSX에서 if문 사용
- JSX는 즉시 실행 함수로 작성해야지 if문을 사용할 수 있다.

```javascript
    <Text>
        {(() => {
            if(name === 'Minjae') return 'My name is Minjae';
            else return 'My First React Native';
        })()}
    </Text>
```

<br />

## 📈 Client 참고 사항 및 패키지

<br />

## 🔍 client: package.json에 proxy 추가


<br />

## 🏃 Redux