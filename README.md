# π» React-Native-Tutorial
### React-Native-Tutorial μ μ₯μ

<br />

## π¨π»βπ» React-native λ΄μ₯ μ»΄ν¬λνΈ
π https://reactnative.dev/docs/components-and-apis

### π Basic Components  
- View: UI κ΅¬μΆμ μν κ°μ₯ κΈ°λ³Έμ μΈ κ΅¬μ± μμ
- Text: νμ€νΈλ₯Ό νμνκΈ°μν κ΅¬μ± μμ
- Image: μ΄λ―Έμ§λ₯Ό νμνκΈ°μν κ΅¬μ± μμ
- TextInput: ν€λ³΄λλ₯Ό ν΅ν΄ μ±μ νμ€νΈλ₯Ό μλ ₯νκΈ° μν κ΅¬μ± μμ
- ScrollView: μ¬λ¬ κ΅¬μ± μμ λ° λ³΄κΈ°λ₯Ό νΈμ€ν ν  μ μλ μ€ν¬λ‘€ μ»¨νμ΄λ
- StyleSheet: CSS μ€νμΌ μνΈμ μ μ¬ν μΆμν κ³μΈ΅μ μ κ³΅

<br />

### π User Interface
- Button: λͺ¨λ  νλ«νΌμμ λ λλ§λμ΄μΌ νλ ν°μΉλ₯Ό μ²λ¦¬νκΈ° μν κΈ°λ³Έ λ²νΌ κ΅¬μ± μμ
- Switch: Boolean μλ ₯μ λ λλ§νλ€

<br />

### π List Views
- FlatList: μ€ν¬λ‘€ κ°λ₯ν λͺ©λ‘μ λ λλ§νλ κ΅¬μ± μμ
- SectionList: FlatListμ μ μ¬νμ§λ§ Section λͺ©λ‘μ μ¬μ©λλ€.

<br />

### π Android Components and APIs
- BackHandler: λ€λ‘ νμμ μν νλμ¨μ΄ λ²νΌ λλ¦μ κ°μ§
- DrawerLayoutAndroid: DrawerLayoutAndroidμμ λ λλ§νλ€.
- PermissionsAndroid: Android Mμ λμ λ κΆν λͺ¨λΈμ λν μμΈμ€λ₯Ό μ κ³΅
- ToastAndroid: Android Toast μλ¦Όμ λ§λ λ€.

<br />

### π iOS components and APIs
- ActionsSheetIOS: iOS μμ μνΈλ₯Ό νμνκ±°λ μνΈλ₯Ό κ³΅μ νλ API

<br />

### π Others
- ActivityIndicator: μν λ‘λ© νμκΈ°λ₯Ό νμνλ€.
- Alert: μ§μ λ μ λͺ©κ³Ό λ©μμ§κ° μλ κ²½κ³  λν μμλ₯Ό μ€ννλ€.
- Animated: μ λλ©μ΄μμ λ§λ€κΈ° μν λΌμ΄λΈλ¬λ¦¬μ΄λ€.
- Dimensions: μ₯μΉ ν¬κΈ°λ₯Ό κ°μ Έμ€κΈ° μν μΈν°νμ΄μ€λ₯Ό μ κ³΅νλ€.
- KeyboardAvoidingView: κ°μ ν€λ³΄λμμ μλμΌλ‘ λ²μ΄λλ λ³΄κΈ°λ₯Ό μ κ³΅νλ€.
- Linking: μμ  λ° λ°μ  μ± λ§ν¬μ μνΈ μμ©ν  μ μλ μΈν°νμ΄μ€λ₯Ό μ κ³΅νλ€.
- Modal: Modal μ½νμΈ λ₯Ό νμνλ κ°λ¨ν λ°©λ²μ μ κ³΅νλ€.
- PixelRatio: μ₯μΉ ν½μ λ°λμ λν μ‘μΈμ€λ₯Ό μ κ³΅νλ€.
- RefreshControl: ScrollView pull, refresh κΈ°λ₯μ μΆκ°νλλ° μ¬μ©λλ€.
- StatusBar: μ± μν νμ μ€μ μ μ΄νλ κ΅¬μ±μμμ΄λ€.


<br />

## π¨π»βπ» prop-types λΌμ΄λΈλ¬λ¦¬
- propsλ₯Ό μ λ¬ ν  λ, μλͺ»λ νμμ μ λ¬νμ λ κ²½κ³  λ©μμ§λ₯Ό λ³΄λ΄μ£Όλ λΌμ΄λΈλ¬λ¦¬

```javascript
    MyButton.propTypes = {
        //titleμ stringμ΄μ¬μΌ νλ©°, νμλ‘ μλ ₯ν΄μΌ νλ€.
        //onPressλΌλ ν¨μκ° νμμ μΌλ‘ μλ ₯ν΄μΌ νλ€.
        title: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
    };

```

<br />

## π¨π»βπ» JSXμμ ifλ¬Έ μ¬μ©
- JSXλ μ¦μ μ€ν ν¨μλ‘ μμ±ν΄μΌμ§ ifλ¬Έμ μ¬μ©ν  μ μλ€.

```javascript
    <Text>
        {(() => {
            if(name === 'Minjae') return 'My name is Minjae';
            else return 'My First React Native';
        })()}
    </Text>
```

<br />

## π¨π»βπ» press μ΄λ²€νΈ
- onPressIn: ν°μΉκ° μμλ  λ νΈμΆ
- onPressOut: ν°μΉκ° ν΄μ²΄λ  λ νΈμΆ
- onPress: ν°μΉκ° ν΄μ²΄ λ  λ onPressOut μ΄ν νΈμΆ
- onLongPress: ν°μΉκ° μΌμ  μκ° μ΄μ μ§μλλ©΄ νΈμΆ

![press](https://user-images.githubusercontent.com/64779472/113672119-43e0f380-96f2-11eb-995f-02f28a464c18.PNG)

```javascript
    <TouchableOpacity
        onPressIn={_onPressIn}
        onLongPress={_onLongPress}
        onPressOut={_onPressOut}
        onPress={_onPress}
        //3μ΄λμ ν΄λ¦­ν΄μΌ onLongPressκ° νΈμΆ
        delayLongPress={3000}
    >
```
<br />

## π¨π»βπ» change μ΄λ²€νΈ
- λ³νλ₯Ό κ°μ§νλ change μ΄λ²€νΈλ TextInput μ»΄ν¬λνΈμμ λ§μ΄ μ¬μ©λλ€.
- eventκ°μ²΄μ **nativeEvent.text** λ₯Ό μ¬μ©ν΄μ text κ°μ μ λ¬ν  μ μλ€.
- onChangeText: μ»΄ν¬λνΈμ νμ€νΈκ° λ³κ²½λ  λ, λ³κ²½ λ νμ€νΈμ λ¬Έμμ΄λ§ μΈμλ‘ μ λ¬νλ©° νΈμΆλλ€.
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

## π¨π»βπ» Pressable μ»΄ν¬λνΈ
- κΈ°μ‘΄μ TouchableOpacity μ»΄ν¬λνΈλ₯Ό λμ²΄νλ Pressable μ»΄ν¬λνΈ.
- HitReact: λ²νΌ λͺ¨μλ³΄λ€ μ½κ° λ¨μ΄μ§ λΆλΆκΉμ§ μ΄λ²€νΈκ° λ°μν  μ μκ² ν΄μ£Όλ pressableμ κΈ°λ₯
- PressRect: λ²νΌμ λλ₯Έ μνμμ μΌλ§λ λ©μ΄μ ΈμΌ μ ν¨ λ²μμμ λ²μ΄λ¬λ€κ³  νλ¨ ν  μ μκ² νλ κΈ°λ₯ 

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

## π¨π»βπ» ν΄λμ€ μ€νμΌλ§(μ¬λ¬κ° μ€νμΌλ§ μ μ©)
- ν΄λμ€ μ€νμΌλ§μ μ»΄ν¬λνΈμ νκ·Έμ μ§μ  μλ ₯νλ λ°©μμ΄ μλ, μ€νμΌμνΈμ μ μλ μ€νμΌμ μ¬μ©νλ λ°©μμ΄λ€.

```javascript
    //μ¬λ¬κ°μ μ€νμΌ μ μ©1, λ€μ μ€λ μ€νμΌμ΄ μμ μλ μ€νμΌμ λ?μ
    <Text style={[styles.text, styles.error]}>Class Style-Error</Text>

    //μ¬λ¬κ°μ μ€νμΌ μ μ©2
    <Text style={[styles.text, {color: 'green'}]}>Class Style-Text</Text>
```
<br />

## π¨π»βπ» Platform
- Platform λͺ¨λμ ν΅ν΄μ κ° νλ«νΌλ§λ€ λ€λ₯Έ μ½λκ° μ μ©λλλ‘ μ½λλ₯Ό μμ±ν  μ μλ€.
- iOSμμ shadowλ shadowColor(μ), shadowOffset(κ±°λ¦¬), shadowOpacity(λΆν¬λͺλ), shadowRadius(νλ¦ λ°κ²½) λ±μ μ€νμΌ μμ±μ΄ μ‘΄μ¬ν©λλ€.
- Androidμμλ elevation μ΄λΌλ μμ±μ΄ μμ΅λλ€.

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

## π¨π»βπ» μ€νμΌλ μ»΄ν¬λνΈ(Styled-components) λΌμ΄λΈλ¬λ¦¬
π https://styled-components.com/

### π κΈ°λ³Έμ μΈ Styled-components
- λ¦¬μ‘νΈ λ€μ΄ν°λΈμ μ€νμΌμμ μΉ νλ‘κ·Έλλ°κ³Όμ μ°¨μ΄λ‘ μ΄ν λΆνΈν¨μ ν΄μμμΌ μ£Όλ λΌμ΄λΈλ¬λ¦¬ 
- **styled.[μ»΄ν¬λνΈ μ΄λ¦]** νν λ€μ λ°±ν±(`)μ μ¬μ©νμ¬ λ§λ  λ¬Έμμ΄μ λΆμ΄κ³  κ·Έ μμ μ€νμΌμ μ§μ νλ©΄ λλ€. μ΄λ¬ν λ¬Έλ²μ **νκ·Έλ ννλ¦Ώ λ¦¬ν°λ΄(Tagged Template Literals)** μ΄λΌκ³  λΆλ₯Έλ€.

```javascript
    //μ€νμΌ μ μ© μμ
    const Container = styled.View`
        flex: 1;
        background-color: #fff;
        align-items: center;
        justify-content: center;
    `;
```
<br />

### π Styled-componentsμ props μ¬μ©νκΈ°
- Styled-components μμλ μ€νμΌμ μμ±νλ λ²‘ν° μμμ propsμ μ κ·Όν  μ μλ€λ μ₯μ μ΄ μμ΅λλ€. μ΄ μ₯μ μ μ΄μ©ν΄ μ€νμΌμ μμ±νλ κ³³μμ μ‘°κ±΄μ λ°λΌ μ€νμΌμ λ³κ²½ν  μ μμ΅λλ€.

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

### π Styled-componentsμ attrs μ¬μ©νκΈ°
- attrsλ Styled-componentsμμ μμ±μ μ€μ ν  λ μ¬μ©νλ€.

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

