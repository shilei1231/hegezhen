<template>
  <div class="certificate-container">
    <button class="print-button" @click="printCertificate">
    <i class="fas fa-print"></i> 打印
  </button>

    <div v-for="(cert, index) in certificateData" :key="index" class="certificate-wrapper">
      <table class="certificate-table">
        <tbody>
        <tr>
          <td class="label-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">合格证编号</div>
              <div class="english-text">Certificate No.</div>
            </div>
          </td>
          <td class="value-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content_text-top-align">{{ cert.CERTIFICATE_NO }}</div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">产品名称</div>
              <div class="english-text">Product Name</div>
            </div>
          </td>
          <td class="value-cell" colspan="18" :style="getCellStyle(1.58)">
            <div class="cell-content multi-line">
              <div class="chinese-text">{{ cert.PRODUCT_NAME}}</div>
              <div class="english-text">{{ cert.PRODUCT_NAME_U}}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">产品型号</div>
              <div class="english-text">Product Model</div>
            </div>
          </td>
          <td class="value-cell" colspan="18" :style="getCellStyle(1.58)">
            <div class="cell-content_text-top-align">{{ cert.PRODUCT_MODEL}}</div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">产品识别代码</div>
              <div class="english-text">PIN.</div>
            </div>
          </td>
          <td class="value-cell" colspan="18" :style="getCellStyle(1.58)">
            <div class="cell-content_text-top-align">{{ cert.PIN }}</div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">发动机编号&nbsp;&nbsp;&nbsp;</div>
              <div class="english-text">Engine No.</div>
            </div>
          </td>
          <td class="value-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content multi-line">
            <div class="chinese-text2">{{ cert.ENGINE_NO}}</div></div>
          </td>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">底盘编号</div>
              <div class="english-text">Chassis No.</div>
            </div>
          </td>
          <td class="value-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content multi-line">
            <div class="chinese-text2                                                                                                                                                                                                                                                                         ">{{ cert.CHASSIS_NO}}</div></div>
          </td>
        </tr>

        <tr>
          <td class="inspection-cell" colspan="24" :style="getCellStyle(2.37)">
            <div class="cell-content">
              <div class="chinese-text">
                经检验，本产品符合 {{ cert.INSPECTION_CERTIFICATION }} 规定，确认合格，准予出厂。
              </div>
              <div class="english-text">
                <div>This is to certify the product has undergone inspection and has been found to conform to</div>
                <div>{{ cert.INSPECTION_CERTIFICATION }} standard, as such it has been granted factory dispatch approval.</div>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">出厂日期</div>
              <div class="english-text">Delivery Date</div>
            </div>
          </td>
          <td class="value-cell" colspan="18" :style="getCellStyle(1.58)">
            <div class="cell-content multi-line">
              <div class="chinese-text">{{ formatDateCN(cert.DELIVERY_DATE) }}</div>
              <div class="english-text">{{ cert.DELIVERY_DATE_U }}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(2.37)">
            <div class="cell-content">
              <div class="chinese-text">检验员</div>
              <div class="english-text">Inspector</div>
            </div>
          </td>
          <td class="value-cell" colspan="6" :style="getCellStyle(2.37)">
            <div class="cell-content">&nbsp;</div>
          </td>
          <td class="label-cell" colspan="7" :style="getCellStyle(2.37)">
            <div class="cell-content">
              <div class="chinese-text">质检机构负责人</div>
              <div class="english-text">Quality Inspection</div>
              <div class="english-text">Manager</div>
            </div>
          </td>
          <td class="value-cell" colspan="5" :style="getCellStyle(2.37)">
            <div class="cell-content">&nbsp;</div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">制造许可证编号</div>
              <div class="english-text">Manufacture License No.</div>
            </div>
          </td>
          <td class="value-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content_text-top-align">{{ cert.MANUFACTURE_LICENSE_NO || '────────' }}</div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">制造许可证有效期</div>
              <div class="english-text">Manufacture License Expiry Date</div>
            </div>
          </td>
          <td class="value-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content multi-line">
              <template v-if="cert.MANUFACTURE_LICENSE_EXPIRY_DATE">
                <div class="chinese-text">{{ formatDateCN(cert.MANUFACTURE_LICENSE_EXPIRY_DATE) }}</div>
                <div class="english-text">{{ formatDateEN(cert.MANUFACTURE_LICENSE_EXPIRY_DATE) }}</div>
              </template>
              <template v-else>
                <div class="chinese-text">────────</div>
              </template>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(2.37)">
            <div class="cell-content">
              <div class="chinese-text">生产单位名称</div>
              <div class="english-text">Manufacturer</div>
              <div class="english-text">Name</div>
            </div>
          </td>
          <td class="value-cell manufacturer-address-value" colspan="18" :style="getCellStyle(2.37)">
            <div class="cell-content multi-line">
              <div class="chinese-text">{{ cert.MANUFACTURER_NAME }}</div>
              <div class="english-text">{{ cert.MANUFACTURER_NAME_U}}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell manufacturer-address-label" colspan="6" :style="getCellStyle(2.37)">
            <div class="cell-content">
              <div class="chinese-text">生产单位地址</div>
              <div class="english-text">Manufacturer</div>
              <div class="english-text">Address</div>
            </div>
          </td>
          <td class="value-cell" colspan="18" :style="getCellStyle(2.37)">
            <div class="cell-content multi-line">
              <div class="chinese-text">{{ cert.MANUFACTURER_ADDRESS}}</div>
              <div class="english-text">{{ cert.MANUFACTURER_ADDRESS_U}}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="3" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">电话</div>
              <div class="english-text">Tel</div>
            </div>
          </td>
          <td class="value-cell" colspan="5" :style="getCellStyle(1.58)">
            <div class="cell-content_text-top-align">{{ cert.TEL || '─────' }}</div>
          </td>
          <td class="label-cell" colspan="3" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">传真</div>
              <div class="english-text">Fax</div>
            </div>
          </td>
          <td class="value-cell" colspan="5" :style="getCellStyle(1.58)">
            <div class="cell-content_text-top-align">{{ cert.FAX || '─────' }}</div>
          </td>
          <td class="label-cell" colspan="4" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">邮编</div>
              <div class="english-text">Zip Code</div>
            </div>
          </td>
          <td class="value-cell" colspan="4" :style="getCellStyle(1.58)">
            <div class="cell-content_text-top-align">{{ cert.ZIP_CODE || '─────' }}</div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="3" :style="getCellStyle(2.37)">
            <div class="cell-content">
              <div class="chinese-text">备注</div>
              <div class="english-text">Remark</div>
            </div>
          </td>
          <td class="value-cell" colspan="21" :style="getCellStyle(2.37)">
            <div class="cell-content multi-line">
              <div class="chinese-text1">{{ cert.REMARK}}</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { certificateApi } from '../services/certificateApi'

// 日期格式化函数
const formatDateCN = (date) => {
  if (!date) return ''
  const d = new Date(date)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

// 获取当前时间的中文格式
// const getCurrentDateCN = () => {
//   return formatDateCN(new Date())
// }

// 日期转英文格式
const formatDateEN = (date) => {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 获取当前时间的英文格式
// const getCurrentDateEN = () => {
//   return formatDateEN(new Date())
// }

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
    required: true
  }
});

const certificateData = ref([])

watch(() => props.data, (newData) => {
  if (newData) {
    if (Array.isArray(newData)) {
      certificateData.value = newData;
    } else {
      certificateData.value = [newData];
    }
  }
}, { deep: true, immediate: true })

const getCertificateDetail = async (id) => {
  const res = await certificateApi.getCertificateDetail(id)
  if (res) {
    return res.data
  }
  return null
};

const getMultipleCertificateDetails = async (ids) => {
  certificateData.value = [];

  for (const id of ids) {
    const data = await getCertificateDetail(id);
    if (data) {
      certificateData.value.push(data);
    }
  }


};

const getCellStyle = (height = 64) => {
  return {
    height: `${height}px`,
    minHeight: `${height}px`
  }
}

function getURLParameters(url) {
  var params = {};
  var paramString = url.split('?')[1];
  if (paramString) {
    var paramPairs = paramString.split('&');
    paramPairs.forEach(function(pair) {
      var keyValue = pair.split('=');
      var key = decodeURIComponent(keyValue[0]);
      var value = decodeURIComponent(keyValue[1]) || true;
      params[key] = value;
    });
  }
  return params;
}

const printCertificate = async () => {
  window.print();

  // 提取所有证书ID
  const certificateIds = certificateData.value.map(cert => cert.ID_ || cert.CERTIFICATE_NO);
  if (certificateIds.length > 0) {
    try {
      await certificateApi.updatePrintStatus(certificateIds);
      //window.location.href = 'about:blank';
    } catch (error) {
      // 打印状态更新失败不影响用户体验，仅记录错误
      console.error('更新打印状态失败:', error);
    }
  }
}

defineExpose({
  printCertificate
})

onMounted(async () => {
  const params = getURLParameters(window.location.href);

  if (params.id) {
    const certificateIds = params.id.split(',').map(id => id.trim());
    await getMultipleCertificateDetails(certificateIds);
  } else if (props.data) {
    if (Array.isArray(props.data)) {
      certificateData.value = props.data;
    } else if (props.data.ID_) {
      const data = await getCertificateDetail(props.data.ID_);
      if (data) {
        certificateData.value = [data];
      }
    } else {
      certificateData.value = [props.data];
    }
  }
})
</script>

<style scoped>
.print-button {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 5px;
}

.print-button:hover {
  background-color: #45a049;
}

.print-button i {
  font-size: 16px;
}

.certificate-container {
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.certificate-wrapper {
  page-break-after: always;
  width: 100%;
  max-width: 21cm;
  min-height: 29.7cm;
  margin-bottom: 3cm;
  box-sizing: border-box;
  position: relative;
}

@media print {
  .certificate-wrapper {
    width: calc(21cm - 40mm) !important;
    max-width: calc(21cm - 40mm) !important;
    margin: 24.7mm auto 10mm !important;
    min-height: auto !important;
    page-break-after: always !important;
  }
}

.certificate-table {
  width: 17cm;
  height: 26.3cm;
  border-collapse: collapse;
  table-layout: fixed;
}

.certificate-table td {
  border: 0.18mm solid #000000;
  background-color: transparent;
  vertical-align: middle;
  text-align: center;
  padding: 0;
  overflow: hidden;
  font-size: 12pt;
  line-height: 1.0;
  height: auto;
}

.label-cell {
  font-family: 'SimSun', '宋体', serif;
}

.value-cell {
  font-family: 'SimSun', '宋体', serif;
}

.inspection-cell {
  font-family: 'SimSun', '宋体', serif;
}

.inspection-cell .chinese-text {
  font-size: 12pt;
  font-family: 'SimSun', '宋体', serif;
  line-height: 1.0;
}

.manufacturer-address-label .chinese-text {
  font-size: 12pt;
  font-family: 'SimSun', '宋体', serif;
}

.manufacturer-address-value .chinese-text {
  font-size: 18pt;
  font-family: 'SimSun', '宋体', serif;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.manufacturer-address-value .english-text {
  font-family: 'Times New Roman', serif;
  font-size: 12pt;
  line-height: 1.0;
  margin: 0.15cm 0 0 0;
  color: #000;
  text-align: center;
}

.cell-content {
  padding: 0.2cm 0.3cm;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
}
.cell-content_text-top-align{
  padding: 0.2cm 0.3cm;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  /* 顶部对齐 */
  padding-top: -1cm !important; /* 减少顶部内边距 */
  white-space: pre-line !important; /* 保留换行符 */
  overflow: hidden !important;
  height: 1.58cm !important;
  max-height: 1.58cm !important;
}

.multi-line {
  justify-content: center;
  align-items: left;
  text-align: left;
}

.chinese-text {
  font-family: 'SimSun', '宋体', serif;
  font-size: 12pt;
  line-height: 1.0;
  margin: 0;
  color: #000;
  text-align: left;
  padding: 0;
  position: relative;
  top: -8px; /* 控制中文向上移动的距离 */
  white-space: pre-line !important; /* 保留换行符 */
}
.chinese-text1 {
  font-family: 'SimSun', '宋体', serif;
  font-size: 12pt;
  line-height: 1.0;
  margin: 0;
  color: #000;
  text-align: left;
  padding: 0;
  position: relative;
  top: -8px; /* 控制中文向上移动的距离 */
  white-space: pre-line !important; /* 保留换行符 */
  overflow: hidden !important;
  height: 2.37cm !important;
  max-height: 2.37cm !important;

}
.chinese-text2 {
  font-family: 'SimSun', '宋体', serif;
  font-size: 12pt;
  line-height: 1.0;
  margin: 0;
  color: #000;
  text-align: left;
  padding: 0;
  position: relative;
  top: -8px; /* 控制中文向上移动的距离 */
  white-space: pre-line !important; /* 保留换行符 */
  overflow: hidden !important;
  height: 1.58cm !important;
  max-height: 1.58cm !important;

}
.english-text {
  font-family: 'Times New Roman', serif;
  font-size: 12pt;
  line-height: 1.0;
  margin: 0;
  color: #000;
  text-align: left;
  padding: 0;
  position: relative;
  top: -5px; /* 控制英文向上移动的距离 */
  white-space: pre-line !important; /* 保留换行符 */
}

@media print {
  .print-button {
    display: none !important;
  }

  @page {
    size: A4 portrait !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .certificate-container {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
    display: block !important;
  }

  body, html {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }

  .certificate-table {
    width: 100% !important;
    height: calc(297mm - 24.7mm - 10mm) !important;
    margin: -0.5cm 0 0 0 !important;
    border-collapse: collapse !important;
    table-layout: fixed !important;
  }

  .certificate-table td {
    border: 0.18mm solid #000000 !important;
    background-color: transparent !important;
    vertical-align: middle !important;
    text-align: center !important;
    padding: 0 !important;
    overflow: hidden !important;
    font-size: 12pt !important;
    line-height: 1.0 !important;
  }

  .label-cell, .value-cell, .inspection-cell {
    font-family: 'SimSun', '宋体', serif !important;
  }

  .chinese-text {
    font-family: 'SimSun', '宋体', serif !important;
    font-size: 12pt !important;
    line-height: 1.0 !important;
    margin: 0 !important;
    color: #000 !important;
    text-align: left !important;
  }

  .english-text {
    font-family: 'Times New Roman', serif !important;
    font-size: 12pt !important;
    line-height: 1.0 !important;
    margin: 0.15cm 0 0 0 !important;
    color: #000 !important;
    text-align: left !important;
  }

  .manufacturer-address-value .chinese-text {
    font-size: 18pt !important;
    text-align: center !important;
  }

  .manufacturer-address-value .english-text {
    text-align: center !important;
  }
}
</style>