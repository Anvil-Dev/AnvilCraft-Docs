import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'zh-CN',

    title: '铁砧工艺：重力科技',
    description: '铁砧工艺是一个以铁砧为核心的 Minecraft 原版生存拓展模组。该模组致力于在保持 Minecraft 原版风格的基础上，为玩家提供更多实用的机械和工艺内容，提升游戏体验。',

    theme: defaultTheme({
        logo: '/icon-light.png',
        logoDark: '/icon.png',

        navbar: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: '附属开发',
                prefix: '/addon/',
                children: [
                    {
                        text: '附属开发',
                        link: 'index'
                    },
                    {
                        text: '环境搭建与模组构建',
                        link: '01_environment'
                    }, {
                        text: '创建你的第一个物品',
                        link: '02_create_item'
                    }, {
                        text: '创建你的第一个方块',
                        link: '03_create_block'
                    }
                ]
            },
            {
                text: '数据包支持',
                prefix: '/datapack/',
                children: [
                    {
                        text: '数据包支持',
                        link: 'index'
                    },
                    {
                        text: 'InWorld 配方',
                        link: '00_inworld_recipe'
                    },
                    {
                        text: '物品压缩配方',
                        link: '01_item_compress_recipe'
                    },
                    {
                        text: '方块压缩配方',
                        link: '02_block_compress_recipe'
                    },
                    {
                        text: '物品粉碎配方',
                        link: '03_item_crush_recipe'
                    },
                    {
                        text: '方块粉碎配方',
                        link: '04_block_crush_recipe'
                    },
                    {
                        text: '冲压配方',
                        link: '05_stamping_recipe'
                    },
                    {
                        text: '膨发配方',
                        link: '06_bulging_recipe'
                    },
                    {
                        text: '挤压配方',
                        link: '07_squeezing_recipe'
                    },
                    {
                        text: '物品注入配方',
                        link: '08_item_inject_recipe'
                    },
                    {
                        text: '烹饪配方',
                        link: '09_cooking_recipe'
                    },
                    {
                        text: '超级加热配方',
                        link: '10_super_heating_recipe'
                    },
                    {
                        text: '时移配方',
                        link: '11_timewarp_recipe'
                    },
                    {
                        text: '解包配方',
                        link: '12_unpack_recipe'
                    },
                    {
                        text: '多方块结构配方',
                        link: '13_multiblock_recipe'
                    },
                    {
                        text: '生物转换配方',
                        link: '14_mob_transform_recipe'
                    },
                    {
                        text: '珠宝制作配方',
                        link: '15_jewel_crafting_recipe'
                    },
                    {
                        text: '矿物涌泉配方',
                        link: '16_mineral_fountain_recipe'
                    }
                ]
            },
            {
                text: 'KubeJS集成',
                prefix: '/kubejs',
                children: [
                    {
                        text: 'KubeJS集成',
                        link: 'index'
                    },
                    {
                        text: 'InWorld 配方',
                        link: '00_inworld_recipe'
                    },
                    {
                        text: '物品粉碎配方',
                        link: '01_item_crush_recipe'
                    },
                    {
                        text: '物品压缩配方',
                        link: '02_item_compress_recipe'
                    },
                    {
                        text: '冲压配方',
                        link: '03_stamping_recipe'
                    },
                    {
                        text: '解包配方',
                        link: '04_unpack_recipe'
                    },
                    {
                        text: '方块粉碎配方',
                        link: '05_block_crush_recipe'
                    },
                    {
                        text: '方块压缩配方',
                        link: '06_block_compress_recipe'
                    },
                    {
                        text: '膨发配方',
                        link: '07_bulging_recipe'
                    },
                    {
                        text: '挤压配方',
                        link: '08_squeezing_recipe'
                    },
                    {
                        text: '物品注入配方',
                        link: '09_item_inject_recipe'
                    },
                    {
                        text: '超级加热配方',
                        link: '10_super_heating_recipe'
                    },
                    {
                        text: '时移配方',
                        link: '11_time_warp_recipe'
                    },
                    {
                        text: '多方块结构配方',
                        link: '12_multiblock_recipe'
                    },
                    {
                        text: '生物转换配方',
                        link: '13_mob_transform_recipe'
                    },
                    {
                        text: '珠宝制作配方',
                        link: '14_jewel_crafting_recipe'
                    },
                    {
                        text: '矿物涌泉配方',
                        link: '15_mineral_fountain_recipe'
                    }
                ]
            },
            {
                text: '关于我们',
                link: '/about_us'
            },
            {
                text: '支持我们',
                link: '/support_us'
            }
        ],
    }),

    bundler: viteBundler(),
})
