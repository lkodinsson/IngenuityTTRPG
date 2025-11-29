---
title: Reference Test
pagination_prev: null
pagination_next: null
unlisted: true
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