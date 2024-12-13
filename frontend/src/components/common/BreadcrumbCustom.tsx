import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

interface Prop {
  name: string;
  url?: string;
}

export default function BreadcrumbCustom({ name, url }: Prop) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href={url}
            className={`${name === "장바구니" ? "font-bold text-gray-950" : "text-gray-500"}`}
          >
            장바구니
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage
            className={`${name === "주문/결제" ? "font-bold text-gray-950" : "text-gray-500"}`}
          >
            주문/결제
          </BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage
            className={`${name === "결제완료" ? "font-bold text-gray-950" : "text-gray-500"}`}
          >
            결제완료
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
