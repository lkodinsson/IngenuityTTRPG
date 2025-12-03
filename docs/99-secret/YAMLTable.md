---
title: YAML Table Test
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YAMLTable from '@site/src/components/YAMLTable';
import tableData from '@site/src/components/tables/conditions.yml';
import tableProficiencies from '@site/src/components/tables/proficiencies.yml';

<Tabs
    groupId='tables'
    queryString='tables'
    defaultValue='default'
    values={[
        {value:'default', label:'Default'},
        {value:'conditions', label:'Conditions'},
        {value:'proficiencies', label:'Proficiencies'},
    ]}>
</Tabs>

Example tables

<Tabs
    groupId='tables'
    queryString='tables'
    defaultValue='default'
    values={[
        {value:'default', label:''},
        {value:'conditions', label:''},
        {value:'proficiencies', label:''},
    ]}
>

<TabItem value='default'>
    Normal
    <YAMLTable />
    Filtered: \{"tags"=["tag1", "tag2"]\}
    <YAMLTable
        headers={["Name","Tags"]}
        values={["name","tags"]}
        filters={{"tags":["tag1","tag5"]}}
    />
</TabItem>

<TabItem value='conditions'>
    Normal, align=["center", "left"]
    <YAMLTable
        tableData={tableData}
        align={["center","left"]}
    />
    filter = \{"desc"=["damage"]\}
    <YAMLTable
        tableData={tableData}
        filters={{"desc":["damage"]}}
    />
</TabItem>

<TabItem value='proficiencies'>
    Activity
    <YAMLTable
        tableData={tableProficiencies}
        filters={{"type":["Activity"]}}
    />
    Influence
    <YAMLTable
        tableData={tableProficiencies}
        filters={{"type":["Influence"]}}
    />
</TabItem>

</Tabs>