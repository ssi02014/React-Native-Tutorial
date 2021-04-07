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
- props를 전달 할 때, 잘못된 타입을 전달했을 때 경고 메시지를 보내주는 라이브러리

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

## 👨🏻‍💻 press 이벤트
- onPressIn: 터치가 시작될 때 호출
- onPressOut: 터치가 해체될 때 호출
- onPress: 터치가 해체 될 때 onPressOut 이후 호출
- onLongPress: 터치가 일정 시간 이상 지속되면 호출

![press](https://user-images.githubusercontent.com/64779472/113672119-43e0f380-96f2-11eb-995f-02f28a464c18.PNG)

```javascript
    <TouchableOpacity
        onPressIn={_onPressIn}
        onLongPress={_onLongPress}
        onPressOut={_onPressOut}
        onPress={_onPress}
        //3초동안 클릭해야 onLongPress가 호출
        delayLongPress={3000}
    >
```
<br />

## 👨🏻‍💻 change 이벤트
- 변화를 감지하는 change 이벤트는 TextInput 컴포넌트에서 많이 사용된다.
- event객체의 **nativeEvent.text** 를 사용해서 text 값을 전달할 수 있다.
- onChangeText: 컴포넌트의 텍스트가 변경될 때, 변경 된 텍스트의 문자열만 인수로 전달하며 호출된다.
```javascript
    const _onChange = e => {
        setText(e.nativeEvent.text);
    }

    const _onChangeText = text => {
        setText(text);
    }

    <TextInput 
        style={{borderWidth: 1, padding: 10, fontSize: 20}}
        placeholder="Enter a Text..."
        // onChange={_onChange}
        onChangeText={_onChangeText}
    />
```
<br />

## 👨🏻‍💻 Pressable 컴포넌트
- 기존의 TouchableOpacity 컴포넌트를 대체하는 Pressable 컴포넌트.
- HitReact: 버튼 모양보다 약간 떨어진 부분까지 이벤트가 발생할 수 있게 해주는 pressable의 기능
- PressRect: 버튼을 누른 상태에서 얼마나 멀어져야 유효 범위에서 벗어났다고 판단 할 수 있게 하는 기능 

![pressable](https://user-images.githubusercontent.com/64779472/113674464-2e20fd80-96f5-11eb-816f-3e5876257834.PNG)


```javascript
    import { Text, Pressable } from 'react-native';

    <Pressable
        pressRetentionOffset={{bottom:50, left: 50, right: 50, top: 50,}}
        hitSlop={50}
    >
        <Text style={{padding:10, fontSize:30}}>{props.title}</Text>
    </Pressable>
```
<br />

## 👨🏻‍💻 클래스 스타일링(여러개 스타일링 적용)
- 클래스 스타일링은 컴포넌트의 태그에 직접 입력하는 방식이 아닌, 스타일시트에 정의된 스타일을 사용하는 방식이다.

```javascript
    //여러개의 스타일 적용1, 뒤에 오는 스타일이 앞에 있는 스타일을 덮음
    <Text style={[styles.text, styles.error]}>Class Style-Error</Text>

    //여러개의 스타일 적용2
    <Text style={[styles.text, {color: 'green'}]}>Class Style-Text</Text>
```
<br />

## 👨🏻‍💻 Platform
- Platform 모듈을 통해서 각 플랫폼마다 다른 코드가 적용되도록 코드를 작성할 수 있다.
- iOS에서 shadow는 shadowColor(색), shadowOffset(거리), shadowOpacity(불투명도), shadowRadius(흐름 반경) 등의 스타일 속성이 존재합니다.
- Android에서는 elevation 이라는 속성이 있습니다.

![platform](https://user-images.githubusercontent.com/64779472/113681358-d5edf980-96fc-11eb-8f82-f57ec6bc503f.PNG)

```javascript
    const styles = StyleSheet.create({
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 10,
            },
            android: {
                elevation: 20,
            }
        }),
    },
});
```
<br />

## 👨🏻‍💻 스타일드 컴포넌트(Styled-components) 라이브러리
🔖 https://styled-components.com/

### 🏃 기본적인 Styled-components
- 리액트 네이티브의 스타일에서 웹 프로그래밍과의 차이로 이한 불편함을 해소시켜 주는 라이브러리 
- **styled.[컴포넌트 이름]** 형태 뒤에 백틱(`)을 사용하여 만든 문자열을 붙이고 그 안에 스타일을 지정하면 된다. 이러한 문법을 **태그드 템플릿 리터럴(Tagged Template Literals)** 이라고 부른다.

```javascript
    //스타일 적용 예시
    const Container = styled.View`
        flex: 1;
        background-color: #fff;
        align-items: center;
        justify-content: center;
    `;
```
<br />

### 🏃 Styled-components에 props 사용하기
- Styled-components 에서는 스타일을 작성하는 벡터 안에서 props에 접근할 수 있다는 장점이 있습니다. 이 장점을 이용해 스타일을 작성하는 곳에서 조건에 따라 스타일을 변경할 수 있습니다.

![props](https://user-images.githubusercontent.com/64779472/113683601-5a417c00-96ff-11eb-8f2f-fd64cf273c56.PNG)

```javascript
    const ButtonContainer = styled.TouchableOpacity`
        background-color: ${props => props.title === 'Minjae' ? '#3498db' : '#9b59b6'};
        border-radius: 15px;
        padding: 15px 40px;
        margin: 10px 0px;
        justify-content: center;
    `;

    const Button = ({ title }) => {
        return (
            <ButtonContainer title={title}>
                <Title>{title}</Title>
            </ButtonContainer>
        );
    };
```
<br />

### 🏃 Styled-components에 attrs 사용하기
- attrs는 Styled-components에서 속성을 설정할 때 사용한다.

![attrs](https://user-images.githubusercontent.com/64779472/113809631-80b8f300-97a3-11eb-9164-94c531acb1c7.PNG)

```javascript
    //components/Input.js
    const StyledInput = styled.TextInput.attrs(props => ({
        placeholder: 'Enter a text...',
        placeholderTextColor: props.borderColor,
    }))`
        (...)
        border-color: ${props => props.borderColor};
    `;

    const Input = ({borderColor}) => {
        return (
            <StyledInput borderColor={borderColor} />
        )
    }

    //App.js
    <Input borderColor='#3498db'></Input>
    <Input borderColor='#9b59b6'></Input>
```
<br />

