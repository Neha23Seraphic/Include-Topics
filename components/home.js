import React from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';

function Home() {
    return (
        <View>
            <Text style={{
                fontWeight: 'bold', textAlign: 'center',
                fontSize: 40, padding: 10, color: 'chocolate'
            }}>
                What is Lorem Ipsum?
          </Text>
            <View style={{
                flex: 1, flexDirection: 'row', width: '100%', margin: 'auto',
            }}>
                <Text style={{
                    fontWeight: 500, fontSize: 20, padding: 20,
                    textAlign: 'justify',
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
        </Text>
                <Text style={{
                    fontWeight: 500, fontSize: 20, padding: 20,
                    textAlign: 'justify',
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
        </Text>
            </View>
        </View>
    );
}

export default Home;
