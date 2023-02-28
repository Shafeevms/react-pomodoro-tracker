export interface IDropDownItem {
  name: string,
  action: () => void,
  img: string,
}

export const isNode = (eventTarget: unknown): eventTarget is Node => {
  if (!(eventTarget instanceof Object)) {
    return false;
  }

  if (eventTarget instanceof Node) {
    return true;
  }

  return 'nodeName' in eventTarget;
};
