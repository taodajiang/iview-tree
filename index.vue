<template>
    <div>
        <Tree :data="sysMenuList" ref="sysMenuTree" :render="renderContent"></Tree>
    </div>
</template>

<script>
import {
    getSysMenuTreeData,
    setChildrenNode,
    setParentNode,
} from './util.js'
export default {
  data() {
    return {
      sysMenuList: []
    };
  },
  components: {},
  methods: {
    //点击菜单按钮触发的事件，处理后台返回的数据。
    // click: () => {
    //   this.sysMenuModel.roleId = params.row.id;
    //   this.sysMenuList = [];
    //   this.$axios.options.url = "sys/role/read/menu";
    //   this.$axios
    //     .request({
    //       data: {
    //         id: params.row.id,
    //         sysType: this.searchModel.sysType
    //       }
    //     })
    //     .then(response => {
    //       if (response.httpCode != 200) {
    //         this.$Message.error(response.msg ? response.msg : this.$t(ERROR));
    //         return;
    //       }
    //       let root = response.data.filter(value => {
    //         return value.parentId === "0";
    //       });
    //       getSysMenuTreeData(root[0], response.data);
    //       this.sysMenuList = root;
    //       console.log(root);
    //     })
    //     .catch(error => {
    //       this.$Message.error(this.$t(ERROR));
    //     });
    //   this.sysMenuModal = true;
    // },
    renderContent(h, { root, node, data }) {
      return h(
        "span",
        {
          style: {
            display: "inline-block",
            width: "100%"
          }
        },
        [
          h("span", [
            h("Checkbox", {
              props: {
                value: data.selected
              },
              style: {
                marginRight: "8px"
              },
              on: {
                "on-change": flag => {
                  setChildrenNode(data, flag);
                  setParentNode(root, data, flag);
                }
              }
            }),
            h("span", data.title)
          ])
        ]
      );
    },
    //提交时，获取选中节点的id集合
    // confirm() {
    //   this.sysMenuModel.menu.length = 0;
    //   this.$refs["sysMenuTree"].getSelectedNodes().forEach(value => {
    //     this.sysMenuModel.menu.push(value.id);
    //   });
    // }
  }
};
</script>

<style>
</style>
