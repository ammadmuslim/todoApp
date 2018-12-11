import React, {Component} from 'react';
import { View, Text, TextInput, FlatList, Button, TouchableHighlight } from 'react-native';
import {Header, Body, Title, Right, Left} from 'native-base';

export default class ToDoScreen extends Component{
    constructor(){
        super()
        this.state ={
            text: '',
            items: [
            ]
        }
    }

    handleAdd (){
        let item = this.state.items.concat(this.state.text);
        this.setState({items: item});
    }

    handleDelete (item){
        index = this.state.items.slice();
        index.splice(item, 1);
        // this.setState({items: array});
        this.setState({items: index});
    }

    render(){
        return(
            <View>
              <Header style={{height: 40, backgroundColor: '#6ef442'}}>
                <Left/>
                <Body>
                <Title style={{fontWeight: 'bold'}}>TO DO APP</Title></Body>
              </Header>
              <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>                
                <TextInput style={{borderWidth: 0.3, width: 250, height: 35, marginRight: 20}} onChangeText={(text)=>this.setState({text})}/>
                <Button
                    title='Tambah'
                    color='#6ef442'
                    onPress={()=>this.handleAdd()}/>
              </View>
                <FlatList
                    data={this.state.items}
                    style={{marginTop: 20, marginLeft: 10, marginRight: 10}}
                    renderItem={({item, index})=><TouchableHighlight onLongPress={()=>this.handleDelete(index)}>
                    <Text style={{borderBottomWidth: 0.3, borderBottomColor: 'grey', marginBottom: 5}}>{item}</Text></TouchableHighlight>}
                    />
            </View>
        )
    }
}
