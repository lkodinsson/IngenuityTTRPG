---
title: Proficiencies
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YAMLTable from '@site/src/components/YAMLTable';
import tableData from '@site/src/components/tables/proficiencies.yml';

##### Table: Proficiencies

<Tabs
    groupId='tables'
    queryString='tables'
    defaultValue='all'
    values={[
        {value:'all', label:'All'},
        {value:'activity', label:'Activity'},
        {value:'animism', label:'Animism'},
        {value:'combat', label:'Combat'},
        {value:'communion', label:'Communion'},
        {value:'crafting', label:'Crafting'},
        {value:'environment', label:'Environment'},
        {value:'influence', label:'Influence'},
        {value:'ki', label:'Ki'},
        {value:'knowledge', label:'Knowledge'},
        {value:'psionics', label:'Psionics'},
        {value:'sorcery', label:'Sorcery'},
        {value:'superpowers', label:'Superpowers'},
        {value:'wizardry', label:'Wizardry'},
    ]}>

<TabItem value='all'>
    <YAMLTable
        tableData={tableData}
        headers={["Name","Type","Description"]}
        values={["name","type","desc"]}
    />
</TabItem>

<TabItem value='activity'>
    <YAMLTable
        tableData={tableData}
        filters={{"type":["Activity"]}}
    />
</TabItem>

<TabItem value='animism'>
    <YAMLTable
        tableData={tableData}
        filters={{"type":["Animism"]}}
    />
</TabItem>

<TabItem value='combat'>
    <YAMLTable
        tableData={tableData}
        filters={{"type":["Combat"]}}
    />
</TabItem>

<TabItem value='communion'>
    <YAMLTable
        tableData={tableData}
        filters={{"type":["Communion"]}}
    />
</TabItem>

<TabItem value='crafting'>
    <YAMLTable
        tableData={tableData}
        filters={{"type":["Crafting"]}}
    />
</TabItem>

<TabItem value='environment'>
    <YAMLTable
        tableData={tableData}
        filters={{"type":["Environment"]}}
    />
</TabItem>

<TabItem value='influence'>
    <YAMLTable
        tableData={tableData}
        filters={{"type":["Influence"]}}
    />
</TabItem>

<TabItem value='ki'>
    <YAMLTable
        tableData={tableData}
        filters={{"type":["Ki"]}}
    />
</TabItem>

<TabItem value='knowledge'>
    <YAMLTable
        tableData={tableData}
        filters={{"type":["Knowledge"]}}
    />
</TabItem>

<TabItem value='psionics'>
    <YAMLTable
        tableData={tableData}
        filters={{"type":["Psionics"]}}
    />
</TabItem>

<TabItem value='sorcery'>
    <YAMLTable
        tableData={tableData}
        filters={{"type":["Sorcery"]}}
    />
</TabItem>

<TabItem value='superpowers'>
    <YAMLTable
        tableData={tableData}
        filters={{"type":["Superpowers"]}}
    />
</TabItem>

<TabItem value='wizardry'>
    <YAMLTable
        tableData={tableData}
        filters={{"type":["Wizardry"]}}
    />
</TabItem>

</Tabs>