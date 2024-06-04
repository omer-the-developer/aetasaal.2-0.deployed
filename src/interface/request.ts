export interface IPaginationOpts {
  all?: boolean;
  //@ts-ignore
  limit: number;
  //@ts-ignore
  offset: number;
  //@ts-ignore
  sortBy: string;
  //@ts-ignore
  sortOrder: string;
  totalCount?: number;
}
