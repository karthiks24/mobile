import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  Body,
  connectStyle,
  Content,
  Container,
  Header,
  Left,
  Text
     , Card, CardItem
} from 'native-base';
import { STYLE_NAME } from './MyApp.style'
import { HorizontalMenu } from './components/HorizontalMenu';
import { VerticalMenu } from './components/VerticalMenu';

const buttonsArray = ['one', 'two', 'three', 'four'];
class MyAppWithoutStyles extends React.Component {
  render() {
    return (
        <Container>
            <Header />
            <Content padder>
                <TouchableOpacity
                    onPress={() => alert("This is Card Header")}>
                <Card>
                    <CardItem header button >
                        <Text>NativeBase</Text>
                    </CardItem>
                    <CardItem button >
                        <Body>
                        <Text>
                            Click on any carditem
                        </Text>
                        </Body>
                    </CardItem>
                    <CardItem footer button >
                        <Text>GeekyAnts</Text>
                    </CardItem>
                </Card>
                </TouchableOpacity>
            </Content>
        </Container>
    );
  }
}
export const MyApp = connectStyle(STYLE_NAME, {})(MyAppWithoutStyles);
