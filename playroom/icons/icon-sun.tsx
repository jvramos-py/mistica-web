import * as React from 'react';
import {useTheme} from '../../src/hooks';

type Props = {
    size?: number;
    color?: string;
};

const IconSun: React.FC<Props> = ({size = 24, color}) => {
    const {colors} = useTheme();

    return (
        <svg width={size} height={size} viewBox="0 0 24 24">
            <g fill={color || colors.neutralHigh}>
                <path d="M12 17.2491C12.9554 17.2491 13.8312 17.0111 14.6273 16.5351C15.4235 16.0591 16.0604 15.4244 16.5381 14.631C17.0158 13.8376 17.2547 12.9606 17.2547 12C17.2547 11.0394 17.0158 10.1624 16.5381 9.369C16.0604 8.57563 15.4235 7.94094 14.6273 7.46493C13.8312 6.9889 12.9554 6.75088 12 6.75088C11.036 6.75088 10.1559 6.9889 9.35972 7.46493C8.56356 7.94094 7.92663 8.57563 7.44894 9.369C6.97124 10.1624 6.73238 11.0394 6.73238 12C6.73238 12.9606 6.97124 13.8376 7.44894 14.631C7.92663 15.4244 8.56356 16.0591 9.35972 16.5351C10.1559 17.0111 11.036 17.2491 12 17.2491ZM12 15.4994C11.3545 15.4994 10.767 15.3407 10.2377 15.0234C9.70833 14.7061 9.28442 14.2815 8.96596 13.7497C8.64748 13.2179 8.48825 12.6347 8.48825 12C8.48825 11.3653 8.64748 10.7821 8.96596 10.2503C9.28442 9.71852 9.70833 9.29396 10.2377 8.97662C10.767 8.65926 11.3545 8.50058 12 8.50058C12.6369 8.50058 13.2201 8.65926 13.7494 8.97662C14.2787 9.29396 14.7026 9.71852 15.0211 10.2503C15.3396 10.7821 15.4988 11.3653 15.4988 12C15.4988 12.6347 15.3396 13.2179 15.0211 13.7497C14.7026 14.2815 14.2787 14.7061 13.7494 15.0234C13.2201 15.3407 12.6369 15.4994 12 15.4994ZM13.007 2.00351C13.007 1.73764 12.9081 1.50392 12.7101 1.30235C12.5121 1.10078 12.2754 1 12 1C11.7246 1 11.4879 1.10078 11.2899 1.30235C11.0919 1.50392 10.993 1.73764 10.993 2.00351V4.07487C10.993 4.34075 11.0919 4.57447 11.2899 4.77603C11.4879 4.9776 11.7246 5.07838 12 5.07838C12.2754 5.07838 12.5121 4.9776 12.7101 4.77603C12.9081 4.57447 13.007 4.34075 13.007 4.07487V2.00351ZM16.8932 5.70877C16.7038 5.89748 16.6091 6.13121 16.6091 6.40996C16.6091 6.68871 16.7038 6.92671 16.8932 7.12398C17.0912 7.31268 17.33 7.40918 17.6097 7.41347C17.8895 7.41775 18.1283 7.32126 18.3263 7.12398L19.7981 5.65731C19.9875 5.46005 20.0821 5.2199 20.0821 4.93686C20.0821 4.65381 19.9875 4.41794 19.7981 4.22925C19.6001 4.04056 19.3613 3.94621 19.0816 3.94621C18.8018 3.94621 18.5673 4.04056 18.3779 4.22925L16.8932 5.70877ZM21.993 13.0035C22.2598 13.0035 22.4943 12.9049 22.6966 12.7076C22.8989 12.5103 23 12.2745 23 12C23 11.7255 22.8989 11.4897 22.6966 11.2924C22.4943 11.0951 22.2598 10.9965 21.993 10.9965H19.9272C19.6518 10.9965 19.4151 11.0951 19.2171 11.2924C19.0192 11.4897 18.9202 11.7255 18.9202 12C18.9202 12.2745 19.0192 12.5103 19.2171 12.7076C19.4151 12.9049 19.6518 13.0035 19.9272 13.0035H21.993ZM18.3134 16.8889C18.124 16.7002 17.8895 16.6059 17.6097 16.6059C17.33 16.6059 17.0912 16.7002 16.8932 16.8889C16.7038 17.0862 16.6091 17.3242 16.6091 17.6029C16.6091 17.8817 16.7038 18.1154 16.8932 18.3041L18.3779 19.7836C18.5673 19.9723 18.8018 20.0645 19.0816 20.0602C19.3613 20.0559 19.6001 19.9595 19.7981 19.7708C19.9875 19.5821 20.0821 19.3483 20.0821 19.0696C20.0821 18.7908 19.9875 18.5528 19.7981 18.3556L18.3134 16.8889ZM13.007 19.9251C13.007 19.6593 12.9081 19.4255 12.7101 19.224C12.5121 19.0224 12.2754 18.9216 12 18.9216C11.7246 18.9216 11.4879 19.0224 11.2899 19.224C11.0919 19.4255 10.993 19.6593 10.993 19.9251V21.9965C10.993 22.2624 11.0919 22.4961 11.2899 22.6977C11.4879 22.8992 11.7246 23 12 23C12.2754 23 12.5121 22.8992 12.7101 22.6977C12.9081 22.4961 13.007 22.2624 13.007 21.9965V19.9251ZM4.20187 18.3427C4.00392 18.54 3.90494 18.778 3.90494 19.0567C3.90494 19.3355 3.99961 19.5692 4.18897 19.7579C4.37832 19.9466 4.61502 20.0431 4.89905 20.0474C5.1831 20.0517 5.4198 19.9595 5.60916 19.7708L7.08099 18.3041C7.27894 18.1154 7.37792 17.8817 7.37792 17.6029C7.37792 17.3242 7.28324 17.0862 7.09389 16.8889C6.90454 16.7002 6.66784 16.6059 6.38381 16.6059C6.09976 16.6059 5.86306 16.7002 5.6737 16.8889L4.20187 18.3427ZM2.00703 10.9965C1.73161 10.9965 1.49491 11.0951 1.29695 11.2924C1.09898 11.4897 1 11.7255 1 12C1 12.2745 1.09898 12.5103 1.29695 12.7076C1.49491 12.9049 1.73161 13.0035 2.00703 13.0035H4.05986C4.33529 13.0035 4.57199 12.9049 4.76996 12.7076C4.96792 12.5103 5.0669 12.2745 5.0669 12C5.0669 11.7255 4.96792 11.4897 4.76996 11.2924C4.57199 11.0951 4.33529 10.9965 4.05986 10.9965H2.00703ZM5.6737 7.12398C5.86306 7.31268 6.09761 7.40704 6.37736 7.40704C6.65709 7.40704 6.89163 7.31268 7.08099 7.12398C7.27894 6.93529 7.37792 6.69942 7.37792 6.41639C7.37792 6.13335 7.28324 5.89748 7.09389 5.70877L5.62206 4.22925C5.44131 4.04056 5.20892 3.94621 4.92488 3.94621C4.64085 3.94621 4.40415 4.04056 4.21478 4.22925C4.01682 4.41794 3.91784 4.65381 3.91784 4.93686C3.91784 5.2199 4.01252 5.45576 4.20187 5.64445L5.6737 7.12398Z" />
            </g>
        </svg>
    );
};

export default IconSun;
