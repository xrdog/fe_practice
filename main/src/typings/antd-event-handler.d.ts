import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { RadioChangeEvent } from 'antd/lib/radio';
import { TablePaginationConfig } from 'antd/lib/table';
import { SorterResult, TableCurrentDataSource } from 'antd/lib/table/interface';
import { FieldData as RCFieldData } from 'rc-field-form/lib/interface';
import { ReactNode } from 'react';
import { NamePath as AntdNamePath } from 'antd/es/form/interface';
import { FormInstance as AntdForm } from 'antd/lib/form';
import { LinkProps } from 'antd/lib/typography/Link';
/** ************************ antd表单接口声明 **************/
declare global {
  namespace Antd {
    /** ************************ Form **************/

    // 表单实例
    type FormInstance = AntdForm<any>;
    namespace Form {
      type onFieldsChange =
        | ((changedFields: RCFieldData[], allFields: RCFieldData[]) => void)
        | undefined;

      type FieldData = RCFieldData;
      type NamePath = AntdNamePath;
    }

    /** ************************ Text **************/
    namespace Text {
      type onClick =
        | ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void)
        | undefined;
    }

    /** ************************ Link **************/
    namespace Link {
      type onClick = LinkProps['onClick'];
    }

    /** ************************ Button **************/
    namespace Button {
      /**
       * 按钮点击处理函数
       */
      type onClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    }
    /** ************************ Input **************/
    /**
     * change事件处理函数
     */
    namespace Input {
      type onChange = (event: React.ChangeEvent<HTMLInputElement>) => void;
    }
    /** ************************ TextArea **************/
    namespace Textarea {
      /**
       * onChange
       */
      type onChange =
        | ((event: React.ChangeEvent<HTMLTextAreaElement>) => void)
        | undefined;
    }
    /** ************************ Modal **************/
    namespace Modal {
      type onCancel =
        | ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void)
        | undefined;
    }
    /** ************************ Editable-Table **************/
    namespace Table {
      interface EditableCellProps<T> extends React.HTMLAttributes<HTMLElement> {
        editing: boolean;
        dataIndex: string;
        title: any;
        inputType: 'number' | 'text';
        record: T;
        index: number;
        children: ReactNode;
      }

      /**
       * 点击行
       */
      type onRowClick = (
        event: React.MouseEvent<HTMLElement, MouseEvent>
      ) => void;

      /**
       * table的onChange事件
       */
      type onChange =
        | ((
          pagination: TablePaginationConfig,
          filters: Record<string, React.ReactText[] | null>,
          sorter: SorterResult<any> | SorterResult<any>[],
          extra: TableCurrentDataSource<any>
        ) => void)
        | undefined;
      /**
       * Table变化时第一个参数页面信息
       */
      interface PageInfo {
        current: number;
        pageSize: number;
        showQuickJumper: boolean;
        showSizeChanger: boolean;
        total: number;
      }
    }

    namespace Checkbox {
      namespace Group {
        type onChange = (checkedValue: Array<CheckboxValueType>) => void;
      }
    }

    namespace Radio {
      namespace Group {
        type onChange = (e: RadioChangeEvent) => void;
      }
    }
  }
}
