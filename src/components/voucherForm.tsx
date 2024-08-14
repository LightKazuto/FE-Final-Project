import React, { useState } from "react";

interface VoucherFormProps {
  onApplyVoucher: () => void;
}

const VoucherForm: React.FC<VoucherFormProps> = ({ onApplyVoucher }) => {
  const [voucherCode, setVoucherCode] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/voucher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: voucherCode }),
      });
      onApplyVoucher();
      setVoucherCode("");
    } catch (error) {
      console.error("Failed to apply voucher:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6"
    >
      <div>
        <label
          htmlFor="voucher"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Do you have a voucher or gift card?
        </label>
        <input
          type="text"
          id="voucher"
          value={voucherCode}
          onChange={(e) => setVoucherCode(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="Enter voucher code"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Apply Code
      </button>
    </form>
  );
};

export default VoucherForm;
