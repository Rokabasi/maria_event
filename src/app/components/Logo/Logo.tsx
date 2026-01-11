import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center items-center w-40">
      <Image src="/icon.png" alt="icon" width={40} height={40} />
      <Image
        src="/logo_maria.png"
        alt="Text Logo"
        width={120}
        height={60}
        style={{ width: 'auto', height: 'auto' }}
      />
    </div>
  );
}
