export interface Pagination {
  page: number,
  changePage: (page: number) => void
}

export enum PaginationSize {
  size = 6
}
