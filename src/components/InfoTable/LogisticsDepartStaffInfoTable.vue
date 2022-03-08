<template>
  <el-table :data="tableData" border stripe>
    <el-table-column prop="id" label="员工号"> </el-table-column>
    <el-table-column prop="name" label="姓名"> </el-table-column>
    <el-table-column prop="departId" label="部门号"> </el-table-column>
    <el-table-column prop="position" label="职位"> </el-table-column>
    <el-table-column prop="tel" label="电话"> </el-table-column>
    <el-table-column prop="email" label="邮箱"> </el-table-column>
  </el-table>
  <div class="block">
    <span class="demonstration">总页数为：{{total/10}}</span>
    <el-pagination
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total=total>
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      total:0,
      pageSize:10,
      currentPage:1,
      tableData: [
      ],
    };
  },
  created() {
    this.getInfo(1);
  },
  methods: {
    getInfo(currentPage){
      axios.get("http://localhost:8012/staff/depart/1",{
        params:{
          pageNum :currentPage,
          pageSize:this.pageSize
        }
      }).
      then((res)=>{
            this.total=Number(res.data.data.pages)*10;
            this.tableData=res.data.data.list;
            console.log(this.tableData);
            console.log(this.total);
          }
      )
    },
    handleCurrentChange(currentPage){
      axios.get("http://localhost:8012/staff/depart/1",{
        params:{
          pageNum :currentPage,
          pageSize:this.pageSize
        }
      }).
      then((res)=>{
            this.total=Number(res.data.data.pages)*10;
            this.tableData=res.data.data.list;
            console.log(this.tableData);
            console.log(this.total);
          }
      )
    }
  },
};
</script>

<style scoped>
.block{
  background: white;
}
</style>