<template>
  <el-row :gutter="12">
    <el-col :span="8">
      <el-card shadow="hover"><span style="vertical-align: middle">20% Folder deleted </span>&nbsp;&nbsp;<el-icon color="#000000"><folder-delete /></el-icon> </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover"><span style="vertical-align: middle">30% Folder checked </span>&nbsp;&nbsp;<el-icon color="#000000"><folder-checked /></el-icon> </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover"><span style="vertical-align: middle">20% Folder removed </span>&nbsp;&nbsp;<el-icon color="#000000"><folder-remove /></el-icon> </el-card>
    </el-col>
  </el-row>


</template>
<script>
import { FolderDelete, FolderRemove, FolderChecked } from "@element-plus/icons-vue";

export default {
  name: 'statistic',
  components: {
    FolderDelete,
    FolderRemove,
    FolderChecked,
  },
}
</script>
