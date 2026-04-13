import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const HomeScreen = () => {
  const accountBalance = '$10,000';
  const quickActions = ['Transfer Funds', 'Pay Bills', 'Add Payee'];
  const transactions = [
    { key: '1', title: 'Deposit', amount: '$1,000' },
    { key: '2', title: 'Withdrawal', amount: '$200' },
    { key: '3', title: 'Payment', amount: '$100' }
  ];

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Account Balance: {accountBalance}</Text>
      <View style={{ marginVertical: 20 }}>
        {quickActions.map(action => (
          <Button key={action} title={action} onPress={() => {}} />
        ))}
      </View>
      <Text style={{ fontSize: 18 }}>Recent Transactions:</Text>
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <Text>{item.title} - {item.amount}</Text>
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default HomeScreen;