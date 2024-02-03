"use client";
import { motion } from "framer-motion";
import Form from "@/components/Form";
export default function HomePage() {
  return (
    <>
      <Form animate={{ x: "50" }}></Form>
    </>
  );
}
// initial={{ opacity: 0, y: -15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 1 }}
