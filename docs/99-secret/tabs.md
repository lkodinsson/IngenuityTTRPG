---
title: Tabs Test
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    groupId='genre'
    queryString='genre'
    defaultValue='all'
    values={[
        {value:'all', label:'All'},
        {value:'fantasy', label:'Fantasy'},
        {value:'modern', label:'Modern'},
        {value:'a', label:'Long Label Name'},
        {value:'b', label:'Another Long Label Name'},
        {value:'c', label:'Test'},
        {value:'d', label:'Label'},
        {value:'e', label:'Name'},
        {value:'f', label:'Foo'},
        {value:'g', label:'Bar'},
        {value:'h', label:'Push'},
        {value:'i', label:'It'},
        {value:'j', label:'To'},
        {value:'k', label:'The'},
        {value:'l', label:'Limit'},
        {value:'m', label:'Everybody'},
        {value:'n', label:'To'},
        {value:'o', label:'The'},
        {value:'p', label:'Limit'},
    ]}>
    <TabItem value='all'>
        All
    </TabItem>
    <TabItem value='fantasy'>
        Fantasy
    </TabItem>
    <TabItem value='modern'>
        Modern
    </TabItem>
</Tabs>

text

<Tabs
    groupId='genre'
    queryString='genre'
    defaultValue='all'
    values={[
        {value:'all', label:''},
        {value:'fantasy', label:''},
        {value:'modern', label:''},
    ]}>
    <TabItem value='all'>
        All2
    </TabItem>
    <TabItem value='fantasy'>
        Fantasy2
    </TabItem>
    <TabItem value='modern'>
        Modern2
    </TabItem>
</Tabs>