import { Document, Page, View, Text, Image } from "@react-pdf/renderer";
import { useState } from "react";
// import { toWords } from "number-to-words";

export default function PDFTemplate({ data }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <Document>
      <Page size="A4">
        <View style={{ padding: "10px 20px", color: "#374151" }}>
          <View
            style={{
              width: "100%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ letterSpacing: "1px", color: "#374151" }}>
              AQUA PREMIUM
            </Text>
            <Text
              style={{ fontSize: "10px", color: "#6b7280", marginTop: "3px" }}
            >
              Premium Water Supply
            </Text>
          </View>

          <Text
            style={{ fontSize: 18, marginTop: "20px", marginBottom: "20px",letterSpacing: "1px" }}
          >
            INVOICE
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: "12px",
            }}
          >
            <View style={{ flexDirection: "column", gap: 3, marginBottom: 20 }}>
              <Text>From</Text>
              <Text>Malik Moazzam</Text>
              <Text style={{ fontSize: "10px", color: "#6b7280" }}>
                0315-3594526
              </Text>
              <Text style={{ fontSize: "10px", color: "#6b7280" }}>
                Owner of Aqua Premium
              </Text>
            </View>
            <View style={{ flexDirection: "column", gap: 3, marginBottom: 20 }}>
              <Text>To</Text>
              <Text>{data?.username || 'Username'}</Text>
              <Text style={{ fontSize: "10px", color: "#6b7280" }}>
                {data?.phone || '0310-xxxxxxx'}
              </Text>
              <Text style={{ fontSize: "10px", color: "#6b7280" }}>
                {data?.address || '47/09/01'}
              </Text>
            </View>
            <View style={{ flexDirection: "column", gap: 3, marginBottom: 20 }}>
              <Text>
                {" "}
                Date: {currentDate.toLocaleDateString("en-US")}{" "}
              </Text>
              <Text>
                {" "}
                Amount: {data?.bottlesRemainingAmount || '500'}
              </Text>
            </View>
          </View>
          <View style={{ fontSize: 12 }}>
            <Text style={{ marginBottom: 10, color: "#6b7280" }}>
              Dear valued client, we kindly remind you to settle your remaining
              balance at your earliest convenience. Your prompt payment will
              greatly assist in maintaining the seamless operation of our water
              supply services. 
            </Text>
            <Text style={{ color: "#6b7280" }}>
            Thank you for your cooperation.
            </Text>

            {/* <View style={{ marginTop: "20px" }}>
              <View style={{ width: "150px", padding: 2 }}>
                <Text>Regards</Text>
                <Text>Malik Moazzam</Text>
              </View>
            </View> */}
          </View>
        </View>
      </Page>
    </Document>
  );
}
