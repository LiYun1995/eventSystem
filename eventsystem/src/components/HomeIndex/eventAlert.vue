<template>
    <div>
        <Card>
            <slot></slot>
            
            <Divider />
             <Table border :columns="columns1" :data="data1" align="center"></Table>
        </Card>
    </div>
</template>

<script>
export default {
    name:'EventAlert',
      data () {
            return {
                columns1: [
                    {
                        title: '事件',
                        key: 'name'
                    },
                    {
                        title: '类型',
                        key: 'age'
                    },
                    {
                        title: '操作',
                        key: 'operation',
                        render:(h,params) => {
                            return h('div',[h('Button',{props:{
                                type:'text',
                                size:'small'
                            }},'查看')])
                        }
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
}
</script>

