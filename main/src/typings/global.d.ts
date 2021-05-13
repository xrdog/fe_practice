/**
 * 与布局有关的声明
 */
import { FC, ReactElement, ReactNode, ReactText } from 'react';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { SelectValue } from 'antd/lib/select';
import { RouteProps } from 'react-router';
import { FormItemProps, Rule } from 'antd/lib/form';
import { Dayjs as StandardDayjs } from 'dayjs';
import { Moment as StandardMoment } from 'moment';
import { NamePath } from 'rc-field-form/lib/interface';

declare global {
  namespace F {
    /** ************************ 组件接口声明 **************/

    /** 顶栏按钮 */
    type HeaderButton = {
      id: number;
      icon?: ReactElement;
      text: string;
      /**
       * 点击时的动作
       */
      onClick?: () => void;
    };

    /** 路由信息 */
    type RouterDomInfo = {
      [key: string]: any;
    };

    /** 顶栏驱动按钮组 */
    type HeaderButtons = HeaderButton[];

    /** 综合路配置接口 */
    export interface Route extends RouteProps {
      /**
       * 路由路径
       */
      path: string;
      /**
       * 侧边栏用的唯一键
       */
      key: string;
      /**
       * 是否展示当前路由
       */
      show: boolean;
      /**
       * 面包屑导航名称
       */
      breadcrumbName: string;
      /**
       * 面包屑导航路径关键词数组
       */
      breadcrumbPath: Array<string>;
      /**
       * 是否有PageHeader组件
       */
      showPageHeader: boolean;
      /**
       * 是否在侧边栏菜单展示
       */
      hideChildren?: boolean;
      /**
       * PageHeader组件使用的页面大标题，无此项时则不展示title
       */
      title?: string;
      /**
       * PageHeader组件使用的二级标题
       */
      subtitle?: string;
      /**
       * 子组件
       */
      children?: F.Route[];
      /**
       * 侧边栏图标
       */
      icon?: ReactElement;
    }

    /**
     * Radio单选框驱动数据
     */
    type RadioConfig = {
      /** 默认选中的值 */
      default: ReactText;
      /** 待选择的值 */
      options: Array<{
        /** 页面展示的标记 */
        label: string;
        /** 提交给后台的值 */
        value: ReactText;
        /** 是否禁用 */
        disabled: boolean;
      }>;
    };

    /**
     * Checkbox多选驱动数据
     */
    type CheckboxConfig = {
      /** 默认选中的值 */
      default: CheckboxValueType[];
      /** 待选择的值 */
      options: Array<{
        /** 页面展示的标记 */
        label: string;
        /** 提交给后台的值 */
        value: ReactText;
        /** 是否禁用 */
        disabled: boolean;
      }>;
    };

    /**
     * Select下拉选项Option驱动数据的结构
     */
    type SelectOption = {
      /** 页面展示的标记 */
      label: string;
      /** 提交给后台的值 */
      value: ReactText;
      /** 是否禁用 */
      disabled?: boolean;
      /** 选择后的回显数据 */
      title?: string;
    };

    /**
     * Radio下拉选项Option驱动数据的结构
     */
    type RadioOption = {
      /** 页面展示的标记 */
      label: string;
      /** 提交给后台的值 */
      value: ReactText;
      /** 是否禁用 */
      disabled?: boolean;
      /** 选择后的回显数据 */
      title?: string;
    };

    /**
     * Select选择器
     * 带筛选框时默认依据title属性进行过滤,使用其他字段容易导致antd报错
     * @param label 显示字段
     * @param title 选中时回显字段
     * @param value 脚本中得到的实际值
     */
    type SingleSelectConfig = {
      /** 默认选中的值 */
      default: SelectValue;
      /** 待选择的值 */
      options: Array<SelectOption>;
    };

    /**
     * tab栏驱动数据
     */
    type TabData = {
      key: string;
      tab: string;
      component: FC;
      /**
       * 是否可点击
       */
      disabled?: boolean;
      // 依赖字段（有无值）
      dependency?: boolean | string;
    };

    /**
     * 表单组校验策略
     */
    type ValidatorMap = {
      [key: string]: Rule[];
    };

    /**
     * Modal框控制器基本结构
     */
    type ModalCtrl = {
      /**
       * 是否展示Modal
       */
      show: boolean;
      /**
       * 打开Modal时需要带入的初始化参数集合
       */
      init?: any;
      /**
       * Modal中暂存的值，点击确认关闭Modal后才可用，点击取消则弃用
       */
      draft?: any;
      /**
       * Modal结束后需要后续动作时，可能需要在打开前暂存index序号
       * 例如将Modal返回结果填写给表格中的指定行
       */
      callback?: any;
    };

    /**
     * 图片对象
     */
    type Img = {
      uri: string;
      url?: string;
    };

    /**
     * 日期类定义
     */
    type Dayjs = StandardDayjs;
    type Moment = StandardMoment;

    /**
     * 任意函数
     */
    type AnyFunction = (...args: any[]) => any;

    /**
     * 普通集合
     */
    type Map = {
      [index: string]: string | number;
      [index: number]: string | number;
    };

    /**
     * 用于获取类中所有函数名
     * 例如:type serviceFnName = FunctionPropertyNames<typeof LookOrderService>;
     *  const a: serviceName[] = ['exportList', 'getExportTask', 'getList'];
     */
    type FunctionPropertyNames<T> = {
      // eslint-disable-next-line @typescript-eslint/ban-types
      [K in keyof T]: T[K] extends Function ? K : never;
    }[keyof T];

    /**
     * Antd的FormItem组件的控制元素
     */
    interface FormItem extends FormItemProps {
      /**
       * 自定义附加控制信息
       */
      extraInfo?: any;
      /**
       * 执行更新逻辑
       */
      updateFn?: F.AnyFunction;
    }

    /**
     * 带有条件控制的嵌套表单
     */
    type NestedFormItem = {
      /**
       * 表单项的更新条件
       */
      shouldUpdate: FormItemProps['shouldUpdate'];
      /**
       * 是否展示当前表单项
       */
      shouldDisplay: () => boolean;
      /**
       * 内部主表单元素属性
       */
      inner: FormItem;
    };
  }
}
