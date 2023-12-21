import React, { useCallback, useMemo, useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoList from './components/Demo/DemoList';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [ascendingOrder, setAscendingOrder] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const toggleOrder = useCallback(() => {
    setAscendingOrder((prevOrder) => !prevOrder);
  }, []);

  const listItems = useMemo(() => {
    const items = [5, 3, 1, 10, 9];
    return ascendingOrder ? [...items].sort((a, b) => a - b) : [...items].sort((a, b) => b - a);
  }, [ascendingOrder]);

  const orderButtonTitle = useMemo(() => {
    return ascendingOrder ? 'Change to Descending Order' : 'Change to Ascending Order';
  }, [ascendingOrder]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={toggleOrder}>{orderButtonTitle}</Button>
    </div>
  );
}

export default App;